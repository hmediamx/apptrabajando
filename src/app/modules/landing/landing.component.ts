import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PaginaActualService } from 'src/app/services/comunication/pagina-actual.service';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/services/comunication/toolbar.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { NoderestapiService } from 'src/app/services/noderestapi.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	chats: any
	botones: any
	user

	constructor(
		private _paginaActualService: PaginaActualService,
		private _router: Router,
		private _toolbarService: ToolbarService,
		private _authService: AuthService,
		private _changeDetectorRef: ChangeDetectorRef, 
		private _api:NoderestapiService
	) {

		this.getChats()


		this.botones = [
			{
				enlace: "/tramites-landing",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Ftramites.png?alt=media&token=bf4bd332-3903-424f-8b66-b0273bc3ead9",
			},
			{
				enlace: "/form/reporte_vecinal",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Freporte_vecinal.png?alt=media&token=ea65e648-4541-4c81-9672-d2d9d9182f4a",
			},
			{
				enlace: "/form/denuncia_anonima",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Fdenuncia_anonima.png?alt=media&token=af22193c-202a-45bc-bedb-50631566fc31",
			},
			{
				enlace: "/form/celula_de_busqueda",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Fcelula_busqueda.png?alt=media&token=e510fd90-4cce-42f3-98b6-a5177e632e26",
			},
			{
				enlace: "/form/servicio_de_grua_gratuito",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Fservicio_grua.png?alt=media&token=9f972036-572b-41e8-8e6f-45b1c4357c35",
			},
			{
				enlace: "/form/denuncia_ambiental",
				imagen: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Felementos_home%2Fdenuncia_ambiental.png?alt=media&token=72006547-ebfd-4e5e-b9cb-537eef32f1ab",
			}
		]


		this._authService._auth.onAuthStateChanged(response => {
			this.user = response
			console.log("this.user", this.user)
		})


		this._toolbarService.page.emit('home')
	}



	ngOnInit(): void {
		this._paginaActualService.setPaginaActual()
		this._toolbarService.dataToolbar.emit(this._router.url)
	}



	getChats() {
		this._api.getData('chats').subscribe(data=>{
			this.chats = data;
			console.log("Obteniendo data from api", this.chats)
		})
	}



	createAnoymousUser(item) {
		this._authService._auth.signInAnonymously().then(response => {
			console.log("La respuesta anónima es: ", response)
			this.loadChat(item, response['user'])
		})
	}



	clickChat(item) {

		if (this.user === null) {
			console.log("No hay sesión")
			this.createAnoymousUser(item)
		} else {
			console.log("la sessión actual es: ", this.user)
			this.loadChat(item, this.user)
		}

	}


	loadChat(item, user) {
		console.log("Lo que se recibe como user es: ", user)
		item.senderUid = user['uid']
		item.senderDisplayName = this.user.isAnonymous ? "Anónimo - " + user['uid'] : user['displayName']
		item.senderPhotoURL = user['photoURL']
		item.senderIsAnonymous = user['isAnonymous']

		console.log("En este punto se abriría con: ", item)
		this._router.navigate(['chat-view'], { queryParams: item })
	}
}
