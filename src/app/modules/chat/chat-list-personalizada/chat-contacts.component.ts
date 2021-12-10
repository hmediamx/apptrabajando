import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../../../services/firebase/database.service";
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

// Services
import { AuthService } from "./../../../services/firebase/auth.service";
import { keyframes } from '@angular/animations';
import { ToolbarService } from 'src/app/services/comunication/toolbar.service';

@Component({
	selector: 'chat-contacts',
	templateUrl: 'chat-contacts.component.html',
	styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent {
	chats

	constructor(
		private _router: Router,
		private _databaseService: DatabaseService, 
		public _toolbarService: ToolbarService, 
		private _bottomSheetRef: MatBottomSheetRef<ChatContactsComponent>,
		public _authService: AuthService
	) {
		this._toolbarService.dataToolbar.emit({ruta:''})

		this._databaseService.getPath('data-chats').subscribe(data => {
			this.chats = data
		})

	}

	openLink(event: MouseEvent): void {
		this._bottomSheetRef.dismiss();
		event.preventDefault();
	}


	close() {
		this._bottomSheetRef.dismiss()
	}


	openChat(data) {
		console.log("data recibida", data)

		this._bottomSheetRef.dismiss()
		let parametros:any = {
			destinatarioUid:data.value.uid, 
			destinatarioDisplayName: data.value.displayName, 
			destinatarioPhotoURL: data.value.icono, 
			destinatarioColorRgba: data.value.colorRgba, 
			destinatarioImagenFondo:data.value.imagenFondo
		}

		this._authService._auth.onAuthStateChanged(user => {
			console.log("El usuario es: ", user['uid'])
			parametros['remitenteUid'] = user['uid']
			parametros['remitenteDisplayName'] = user['displayName']
			parametros['remitentePhotoURL'] = user['photoURL']
			parametros['remitenteIsAnonymous'] = user['isAnonymous']

			console.log("Parametros envíados", parametros)
			this._router.navigate(['chat-view'], { queryParams: parametros })
		})
	}
}