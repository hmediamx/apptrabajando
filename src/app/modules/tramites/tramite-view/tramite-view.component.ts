import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// firebase
import { AuthService } from "./../../../services/firebase/auth.service";
import { DatabaseService } from "./../../../services/firebase/database.service";
// Emitter
import { ToolbarService } from "./../../../services/comunication/toolbar.service";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
	selector: 'app-tramite-view',
	templateUrl: './tramite-view.component.html',
	styleUrls: ['./tramite-view.component.sass']
})
export class TramiteViewComponent {
	tramite: any
	formGroup:FormGroup
	archivosLista = []
	ubicacion: any = {}
	destinatario:string
	uid:string
	id
	

	constructor(
		public datos: DatabaseService,
		public _authService: AuthService,
		private parametros: ActivatedRoute,
		private _formBuilder: FormBuilder,
		public dialog: MatDialog,
		private router: Router,
		private _toolbarService: ToolbarService,
		private _databaseService: DatabaseService
	) {
		this.id = this._databaseService._angularFireDatabase.createPushId()
		this.comprobarSesion()
		this._toolbarService.dataToolbar.emit({ ruta: 'tramites-view' })
		let params = this.parametros.snapshot.params
		this.destinatario = this.parametros.snapshot.params.from
		this.getTramite(params.id, params.from)
		this.construirFormulario()
	}


	// =============================================================
    //      COMPROBAR SESIÓN
    // =============================================================
	comprobarSesion(){

		this._authService._auth.onAuthStateChanged(userData => {
			
			if(userData) {
				console.log("Hay user", userData)
				this.uid = userData['uid']
				console.log("this.uid", this.uid)
			}

		})

	}

	// =============================================================
    //      ESCUCHAR CARGA DE ARCHIVOS
    // =============================================================
    leerArchivos(event) {
        this.archivosLista = event
        console.log("Leyendo desde FORM:", this.archivosLista)
    }



	// =============================================================
    //      ESCUCHAR UBICACIÓN
    // =============================================================
    leerPropagacion(event) {
        this.ubicacion = event
    }


	// =============================================================
    //      TRAER TRÁMITE
    // =============================================================
	getTramite(id, destinatario) {
		this.datos._angularFireDatabase.database.ref('data/tramites/' + destinatario).on('value', snapshot => {
			this.tramite = snapshot.val()['tramites'][id]
			console.log("El trámite es: ", this.tramite)
		})
	}


	// =============================================================
    //      CONSTRUIR FORMULARIO
    // =============================================================
	construirFormulario() {
	    this.formGroup = this._formBuilder.group({
	        nombreCompleto: ['', Validators.required],
			correo: ['', Validators.required],
	        calleNumero: ['', Validators.required],
	        colonia: ['', Validators.required],
	        codigoPostal: ['', Validators.required],
	        telefono: ['', Validators.required],
	        mensaje: ['']
	    })
	}

	processForm(){
		console.log("Procesando formulario ...")
		this.formGroup.value['ubicacion'] = this.ubicacion
		this.formGroup.value['archivos'] = this.archivosLista
		
		let updates = this.armarUpdates(this.formGroup.value)
		console.log("Las updtes son: ", updates)
		this.enviarFirebase(updates)
	}


	armarUpdates(formGroup){
		    let updates = {}
		    updates['users/' + this.uid + '/tramites/' + this.id] = formGroup
			updates['tramites/' + this.destinatario + '/' + this.id] = formGroup
			
			return updates
	}

	enviarFirebase(updates){
		this._databaseService._angularFireDatabase.database.ref().update(updates).then(response=>{
			console.log("La respuesta es: ", response)
		})
	}	
}







@Component({
	selector: 'dialog-alert',
	templateUrl: 'dialog-alert.html'
})
export class DialogAlert {

	constructor(
		public dialogRef: MatDialogRef<DialogAlert>,
		@Inject(MAT_DIALOG_DATA) public data
	) {
		// this.data = {
		//     titulo: "Formulario enviado",
		//     mensaje: "Su solicitud se ha envíado, su comprobante está listo para ser descargado.",
		//     resultado: true
		// }
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}