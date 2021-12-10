import { Component } from '@angular/core';
import { Location } from "@angular/common";
// RUTAS
import { Router, Routes } from '@angular/router';
// SERVICIOS
import { ToolbarService } from "./../../services/comunication/toolbar.service";
import { SidenavService } from "./../../services/comunication/sidenav.service";
import { AuthService } from "../../services/firebase/auth.service";
import { DatabaseService } from "../../services/firebase/database.service";
// Enviroment
import { environment } from "./../../../environments/environment";
import { snapshotChanges } from '@angular/fire/database';


@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
	page: string = '/'
	dataToolbar:any = {
		title: "",
		subtitle: "", 
		image: ""
	}
	gioUsuario
	titulo


	constructor(
		public _authService: AuthService,
		public _location: Location,
		public datos: DatabaseService,
		public _toolbarService: ToolbarService,
		public _router: Router,
		public _sidenavServiceService: SidenavService
	) {
		this.titulo = environment.titulo
		this.constructToolbarData()
		this.constructCurrentPage()
		this.readSession()
	}


	// ======================================================
	//  		CONSTRUCT CURRENT PAGE
	// ======================================================
	constructCurrentPage(){
		this._toolbarService.page.subscribe(page => {
			console.log("Currente page: ", page)
			this.page = page;
		})
	}


	// ======================================================
	// ==================	READ THE UPDATE SESSION
	// ======================================================
	constructToolbarData(){
		this._toolbarService.dataToolbar.subscribe(data => {
			console.log("DATA TOOLBAR", data)
			this.dataToolbar = data;
		})
	}


	// ======================================================
	// ==================	READ THE UPDATE SESSION
	// ======================================================
	readSession(){
		this._authService._auth.onAuthStateChanged(dataSesion=>{
			this.gioUsuario = dataSesion
		})
	}




	sendRecycleBin(){
		this.getDataForRecycleBin();
	}

	getDataForRecycleBin(){
		let ruta = `chats/${this.dataToolbar.senderUid}/misMensajes/${this.dataToolbar.uid}`;

		console.log("La ruta es: ", ruta)
		console.log("Los datos en dataToolbar son ", this.dataToolbar)

		this.datos._angularFireDatabase.database.ref(ruta).on('value', snapshot => {
			console.log("Los datos a respaldar serían", snapshot.val())
			this.insertDataInRecycleBin(snapshot.val())
		})
	}


	insertDataInRecycleBin(data){
		let ruta = `chats/${this.dataToolbar.senderUid}/recycleBin/${this.dataToolbar.uid}`;
		this.datos._angularFireDatabase.database.ref(ruta).update(data).then(data=>{
			console.log("Se guardó la data en la papelera de reciclaje", data)
			this.deleteDataRecycled()
		})
	}


	deleteDataRecycled(){
		let ruta = `chats/${this.dataToolbar.senderUid}/misMensajes/${this.dataToolbar.uid}`;
		this.datos._angularFireDatabase.database.ref(ruta).remove(success => {
			this._router.navigateByUrl('/chats-list/'+this.dataToolbar.senderUid)
		})
	}



	// ======================================================
	// ==================	READ THE UPDATE SESSION
	// ======================================================
	llamarEliminarChat() {
		console.log("this.dataToolbar", this.dataToolbar)
		

		let updates = {}

		updates[`chats/${this.dataToolbar.senderUid}/messages/${this.dataToolbar.uid}`] = null
		updates[`chats/${this.dataToolbar.senderUid}/misMensajes/${this.dataToolbar.uid}/message`] = null

		updates[`chats/${this.dataToolbar.uid}/messages/${this.dataToolbar.senderUid}`] = null
		updates[`chats/${this.dataToolbar.uid}/misMensajes/${this.dataToolbar.senderUid}/message`] = null

		this.eliminarChat(updates)
	}


	eliminarChat(updates) {
		console.log("Envíando los updates para eliminar: ", updates)

		this.datos._angularFireDatabase.database.ref().update(updates).then(data => {
			console.log("Se eliminaron correctamente los datos.")
		})
	}
}