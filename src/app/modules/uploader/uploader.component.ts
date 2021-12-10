import { Component, EventEmitter, Output, Input } from '@angular/core';
// Funciones
import { functionsForms } from "./../../functions/functions-forms";
// firebase
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

@Component({
	selector: 'app-uploader-single',
	templateUrl: './uploader-single.component.html',
	styleUrls: ['./uploader.component.scss']
})
export class UploaderSingleComponent {
	@Output() archivo: EventEmitter<any> = new EventEmitter()
	@Input() buttonText
	@Input() type
	@Input() nombreControl
	miFormControl = "UnaCosa"
	
	enabledButton = false
	archivosLista = []
	archivoSingle:Input
	archivoSingleValue:String

	constructor(
		private funciones: functionsForms,
		private cargaDeArchivos: AngularFireStorage
	) {
		console.log("archivosLista init", this.archivosLista)
		// this.miFormControl = this.nombreControl
	}



	adjuntarArchivo(fileInput: any) {
		console.log("adjuntando archivosLista", this.archivosLista)
		const file = fileInput.target.files[0];
		const idArchivo = this.funciones.generarFolio()
		const nombreCompuesto = idArchivo + "." + file.name.split('.')[1];
		const ref = this.cargaDeArchivos.ref(nombreCompuesto);
		const task = ref.put(file);

		const dataInicial = {
			progreso: 0,
			barraProgreso: true,
			datos: false,
			nombre: nombreCompuesto,
			url: ""
		}



		let idTemporal = (this.archivosLista.push(dataInicial)) - 1;

		// observe percentage changes
		task.percentageChanges().subscribe(snapshot => {
			this.archivosLista[idTemporal].progreso = Math.round(snapshot);
			console.log(snapshot)
		})

		// get notified when the download URL is available
		task.snapshotChanges().pipe(
			finalize(() => {
				ref.getDownloadURL().subscribe(snapshot => {
					this.archivosLista[idTemporal].barraProgreso = false;
					this.archivosLista[idTemporal].datos = true;
					this.archivosLista[idTemporal].url = snapshot;
					this.archivosLista[idTemporal].nombre = nombreCompuesto;
					this.archivosLista[idTemporal].size = file.size;
					this.archivosLista[idTemporal].tipo = file.type;
					
					this.archivo.emit(this.archivosLista[0].url)
					console.log("La lista es ", this.archivosLista[0].url)
					this.archivoSingleValue = this.archivosLista[0].url
					console.log("Individual es:", this.archivoSingleValue)
				});


				if(this.archivosLista.length ) {
					this.enabledButton = true
				}
			})
		).subscribe()
	}
}

@Component({
	selector: 'app-uploader-multiple',
	templateUrl: './uploader-multiple.component.html',
	styleUrls: ['./uploader.component.scss']
})
export class UploaderMultipleComponent {
	@Output() archivos: EventEmitter<any> = new EventEmitter()
	@Input() buttonText
	@Input() type
	enabledButton = false
	archivosLista = [];

	constructor(
		private funciones: functionsForms,
		private cargaDeArchivos: AngularFireStorage
	) {
		console.log("archivosLista init", this.archivosLista)
	}



	adjuntarArchivo(fileInput: any) {
		console.log("adjuntando archivosLista", this.archivosLista)
		const file = fileInput.target.files[0];
		const idArchivo = this.funciones.generarFolio()
		const nombreCompuesto = idArchivo + "." + file.name.split('.')[1];
		const ref = this.cargaDeArchivos.ref(nombreCompuesto);
		const task = ref.put(file);

		const dataInicial = {
			progreso: 0,
			barraProgreso: true,
			datos: false,
			nombre: nombreCompuesto,
			url: ""
		}



		let idTemporal = (this.archivosLista.push(dataInicial)) - 1;

		// observe percentage changes
		task.percentageChanges().subscribe(snapshot => {
			this.archivosLista[idTemporal].progreso = Math.round(snapshot);
			console.log(snapshot)
		})

		// get notified when the download URL is available
		task.snapshotChanges().pipe(
			finalize(() => {
				ref.getDownloadURL().subscribe(snapshot => {
					this.archivosLista[idTemporal].barraProgreso = false;
					this.archivosLista[idTemporal].datos = true;
					this.archivosLista[idTemporal].url = snapshot;
					this.archivosLista[idTemporal].nombre = nombreCompuesto;
					this.archivosLista[idTemporal].size = file.size;
					this.archivosLista[idTemporal].tipo = file.type;
					
					this.archivos.emit(this.archivosLista)
					console.log("La lista es ", this.archivosLista)
				});


				if(this.archivosLista.length ) {
					this.enabledButton = true
				}
			})
		).subscribe()
	}
}
