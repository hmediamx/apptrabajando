import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/firebase/auth.service";
import { DatabaseService } from "../../services/firebase/database.service";
import { concat } from 'rxjs';



@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	mainMenu
	user
	userData
	menuUser
	menuAdministrator = [
		{
			icon: "note_add", 
			enlace: "form/recipients", 
			texto: "Agregar dependencia para trámites"
		}, 
		{
			icon: "plagiarism", 
			enlace: "table/tramites", 
			texto: "Revisar dependencias de trámites"
		}, 
		{
			icon: "note_add", 
			enlace: "form/tramites_tramite", 
			texto: "Agregar trámite en dependencia"
		}, 
		{
			icon: "plagiarism", 
			enlace: "table/medio_ambiente", 
			texto: "Revisar trámites Medio Ambiente"
		}, 
		{
			icon: "chat_bubble", 
			enlace: "users-registers", 
			texto: "Administar Usuarios"
		}, 
		{
			icon: "format_list_numbered", 
			enlace: "table/denuncia_anonima", 
			texto: "Registros Denuncia Anónima"
		}, 
		{
			icon: "format_list_numbered", 
			enlace: "table/servicio_de_grua_gratuito", 
			texto: "Registros Servicios de Grua Gratuitos"
		}
	]

	
	constructor(
		private _authService:AuthService, 
		private _databaseService:DatabaseService
	) {

		this._authService._auth.onAuthStateChanged(user=>{
			
			if(user) {
				this.user = user
				this.getUserProfile(this.user['uid'])
			}

		})
		
	}

	ngOnInit(){
		this.getMainMenu()
	}


	getUserProfile(uid){
		this._databaseService._angularFireDatabase.database.ref('users/'+uid+'/profile').on('value', snapshot => {
			this.userData = snapshot.val()
			// console.log("this.userData", this.userData)
			this.getmenuAuthor(uid)
		})
	}


	getmenuAuthor(uid){
		this._databaseService._angularFireDatabase.database.ref('users/' + uid + '/menu').on('value', snapshot => {
			this.menuUser = snapshot.val()
			// console.log("this.menuAuthor", this.menuAuthor)
		})
	}


	getMainMenu(){

		this._databaseService._angularFireDatabase.database.ref('data/main_menu').on('value', snapshot => {
			this.mainMenu = snapshot.val()
		})

	}
}