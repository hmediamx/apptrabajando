import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// firebase
import { AuthService } from "./../../../services/firebase/auth.service";
import { DatabaseService } from "./../../../services/firebase/database.service";
import { ToolbarService } from 'src/app/services/comunication/toolbar.service';



@Component({
	selector: 'app-chats-landing',
	templateUrl: './chats-landing.component.html',
	styleUrls: ['./chats-landing.component.sass']
})
export class ChatsLandingComponent {
	usuario: any
	chats: any
	data: any
	ruta: any = false
	lista

	constructor(
		private _databaseService: DatabaseService,
		private parametros: ActivatedRoute,
		private fas: AuthService,
		private router: Router, 
		private _toolbarService:ToolbarService
	) {

		this.fas.gioUsuario.subscribe(data => {
			this.usuario = data

			this.parametros.params.subscribe(parametros => {
				//let lista = parametros.lista
				this.lista = parametros.lista

				console.log("Los parametros son", this.lista)

				
				this._databaseService._angularFireDatabase.database.ref('data/chats').orderByChild('orden').on('value', snapshot=>{
					this.chats = snapshot.val()
					console.log(this.chats)
				})
				// this.chats = chats
			})
		})

		this._toolbarService.page.emit('chat-landing')
	}


	cargarUltimosMensajes(item) {
		let ref = this._databaseService._angularFireDatabase.database.ref(`dependencias/${item}/chat/misMensajes/`)
		let lista = this._databaseService._angularFireDatabase.list(ref)

		lista.valueChanges().subscribe(values => {
			this.chats = values
			console.log("Valores", values)
		})
	}


	abrirEnlace(data) {
		let item = data.value.remitente
		let ruta = `/chat-view/${item.uid}/${item.nombre}/${this.ruta}`
		this.router.navigate([ruta])
	}

}