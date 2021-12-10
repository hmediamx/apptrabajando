import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// firebase
import { AuthService } from "./../../../services/firebase/auth.service";
import { DatabaseService } from "./../../../services/firebase/database.service";
// import { chats } from "../../../../../assets/data/_chats";
// import 'hammerjs';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { KeyValue } from '@angular/common';
// Emitter
import { ToolbarService } from "./../../../services/comunication/toolbar.service";

@Component({
	selector: 'app-chats-list',
	templateUrl: './chats-list.component.html',
	styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
	routePath:string 

	usuario: any
	// chats
	chats: any = []
	data: any
	currentList
	batch = 5
	lastKey = ''
	finished = false

	constructor(
		private datos: DatabaseService,
		public _activatedRoute: ActivatedRoute,
		private router: Router,
		private _toolbarService: ToolbarService,
		private _changeDetectorRef: ChangeDetectorRef
	) {
		this._activatedRoute.params.subscribe(params => {
			this.currentList = params;
			this.routePath = this.getRouteByListType(params)
		})
	}


	ngOnInit(){
		this._toolbarService.dataToolbar.emit({ ruta: 'chats-list' })
		this.getChats()
	}

	getRouteByListType(params){
		if(params['type'] == 'admin') {
			return `chats/${params.list}/misMensajes`
		} else if (params['type'] == 'trash') {
			return `chats/${params.list}/recycleBin`
		}
	}



	// let url = "https://ecatepecapp.firebaseio.com/chats/chat_presidente/misMensajes/.json?shallow=true"
	// 	this.datos.getChatsKeys(url).subscribe(observer=>{
	// 		console.log("observer", observer)
	// 	})

	getChats(){
		this.chats = []
		
		this.datos._angularFireDatabase.database.ref(this.routePath).orderByChild('message/id').on('child_added', snapshot => {
			// console.info("Datos obtenidos son: ", snapshot.val())
			this.chats.push(snapshot.val())
			// this.lastKey = this.chats[0].lastKey

	
			// let values = Object(snapshot.val())
			// let keys = Object.keys(snapshot.val())
			// this.lastKey = keys[keys.length-1];
		})
	}



	abrirChat(data) {
		let item = data.value.message
		let params:any = {
			tipo: "chat",
			url: "chat-view"
		}

		console.log("Current list: ", this.currentList.list)

		if( this.currentList.list == item.sender.uid ) {
			params = {	
				id: item.recipient.uid,
				displayName: item.recipient.displayName,
				uid: item.recipient.uid,
				senderUid: item.sender.uid,
				senderDisplayName: item.sender.displayName
			}
		} else {
			params = {
				id: item.sender.uid,
				displayName: item.sender.displayName,
				uid: item.sender.uid,
				senderUid: item.recipient.uid,
				senderDisplayName: item.recipient.displayName
			}
		}

	
		console.log("Los params son:", params)

		this.router.navigate(['chat-view'], { queryParams: params })
	}


	// Preserve original property order
	originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
		return 0;
		this._changeDetectorRef.detectChanges()
	}

	trash() {
		let route = `chats-list/${this.currentList.list}/trash`
		console.log("la ruta es: ", route)
		this.router.navigate([route])
	}

	loadMore(){
		console.log("Scrolled!")
	}
}


@Component({
	selector: 'bottom-sheet',
	templateUrl: 'chat-list-sheet.html',
})
export class BottomSheet {
	constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) { }

	openLink(event: MouseEvent): void {
		this._bottomSheetRef.dismiss();
		event.preventDefault();
	}
}




  // おん と に ご めな さい
  // 私 の せいで
  // asdfsafds
  // だから
  // termina con él



// Creamos tu sitio web y lo hospedamos desde $900 pesos, incluye sitio, dominio y hospedaje.  

// Tú hospedaje se renueva de forma gratuita.

// Pregunta por nuestro innovador sistema de desarrollo de Apps que te ayudará a crecer rápido y con poca inversión.

// Pregunta sin compromiso para saber porqué somos tu mejor opción a pesar de manejar un precio económico.