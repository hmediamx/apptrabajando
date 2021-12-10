import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// firebase
import { AngularFireStorage } from "@angular/fire/storage";
import { AuthService } from "./../../../services/firebase/auth.service";
import { DatabaseService } from "./../../../services/firebase/database.service";
// Servicio Chats Toolbar
import { ToolbarService } from "./../../../services/comunication/toolbar.service";
// Import mensaje object
import { Message } from "./message";
// Servicio de subida
import { FirebaseUploadService } from "./../../../services/firebase/firebase-upload.service";
import { Subida } from "./../../../services/firebase/subida";


interface chat {
	sender:any;
	recipient:any;
}

@Component({
	selector: 'app-chat-view',
	templateUrl: './chat-view.component.html',
	styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit, AfterViewInit {
	@ViewChild('contenedor', { static: true }) private feedContainer: ElementRef

	chat:chat = {
		sender:{}, 
		recipient:{}
	}
	// usuario: firebase.User
	chatHistorial: any
	alturaChat = 100
	// Archivos
	subidaEnCurso: Subida
	mostrarProgreso: boolean = false
	porcentajeProgreso: number = 0
	badge:number = 0
	loading:boolean = false

	// progressbar

	constructor(
		public archivos: AngularFireStorage,
		public _databaseService: DatabaseService,
		public autorizacion: AuthService,
		private _activatedRoute: ActivatedRoute,
		private subir: FirebaseUploadService,
		private _toolbarService: ToolbarService, 
		private _router:Router
	) {
		this.onResize()
		this.construirChat()
		this.actualizarBadge()
	}

	ngOnInit() {
	}


	// ===============================================================================
	// 			CONSTRUIR CHAT
	// ===============================================================================
	construirChat() {
		this._activatedRoute.queryParams.subscribe(params => {
			if (params) {
				this.chat.sender = this.generateSender(params)
				this.chat.recipient = this.generateRecipient(params)
				this.loadMessages(this.chat.sender, this.chat.recipient)
				
				this._toolbarService.dataToolbar.emit({
					title: this.chat.recipient.displayName, 
					subtitle: "chateando con ...", 
					image: params.icono
				})

				this._toolbarService.page.emit('chat')
			} else {
				console.log("No existen params, no se puede crear el chat")
			}
		})
	}

	
	actualizarBadge() {
		// Actualizar badge
		let updateBadge = {}
		let route = 'chats/' + this.chat.sender.uid + '/misMensajes/' + this.chat.recipient.uid + '/message/badge'
		updateBadge[route] = null

		console.log("Actualizando badge ...", route)
		this._databaseService._angularFireDatabase.database.ref().update(updateBadge).then(() => {
			console.log("Se borró el badge")
		})
	}

	
	menuBubble(event, item) {
		event.preventDefault()
		console.log(item)
	}


	deleteMessage(item){
		console.log("eliminar", item)

		let updates = {}

		updates[`chats/${this.chat.sender.uid}/mensajes/${this.chat.recipient.uid}/${item.id}`] = null
		updates[`chats/${this.chat.recipient.uid}/mensajes/${this.chat.sender.uid}/${item.id}`] = null

		this._databaseService._angularFireDatabase.database.ref().update(updates).then(() => {
			console.log("Se han envíado los updates")
			this.scrollToBottom()
		})
	}


	enviarMensaje(mensajeVar, archivo?) {
		if (mensajeVar) {
			let idValue = this._databaseService._angularFireDatabase.createPushId()

			let datosArchivo

			if (archivo) {
				datosArchivo = {
					url: archivo.url,
					size: archivo.file.size,
					type: archivo.file.type,
					name: archivo.file.name
				}
			} else {
				datosArchivo = {}
			}

			let message = new Message(idValue, this.chat.sender, this.chat.recipient, mensajeVar, datosArchivo)
			let updates = this.armarUpdates(idValue, message)

			console.log("los updates son: ", updates)


			this._databaseService._angularFireDatabase.database.ref().update(updates).then(() => {
				console.log("Se han envíado los updates")
				this.scrollToBottom()
			})
		} else {
		}
	}


	armarUpdates(id, message) {
		let updates = {}

		let messageWithBadge = message;
		messageWithBadge.badge = "!"
		

		updates[`chats/${this.chat.sender.uid}/mensajes/${this.chat.recipient.uid}/${id}`] = message
		updates[`chats/${this.chat.sender.uid}/misMensajes/${this.chat.recipient.uid}/message`] = message

		updates[`chats/${this.chat.recipient.uid}/mensajes/${this.chat.sender.uid}/${id}`] = message
		updates[`chats/${this.chat.recipient.uid}/misMensajes/${this.chat.sender.uid}/message`] = messageWithBadge

		return updates
	}


	enviarMensajeConArchivo(event) {
		this.loading = true;

		this.subir.progress.subscribe(data => {
			this.porcentajeProgreso = data
		})

		let file = event.target.files[0]
		this.subidaEnCurso = new Subida(file)
		this.subir.adjuntarArchivo(this.subidaEnCurso, 'users/')

		// Subscribimos para que al finalizar envíe el mensaje
		this.subidaEnCurso.finalizado.subscribe(event => {
			if (event) {
				this.enviarMensaje("Mensaje con archivo", this.subidaEnCurso)
				this.loading = false;
			}
		})
	}


	// ===============================================================================
	// 			CARGAR MENSAJES
	// ===============================================================================
	loadMessages(sender, recipient) {
		// let ruta = 'chats/' + sender.uid + '/mensajes/' + recipient.uid
		let ruta = `chats/${sender.uid}/mensajes/${recipient.uid}`
		console.log("LA ruta es :", ruta)

		this._databaseService._angularFireDatabase.database.ref(ruta).on('value', snapshot => {
			if (!snapshot.exists()) this.crearBienvenida()
			this.chatHistorial = snapshot.val()
			console.log("El chat cargado es: ", this.chatHistorial)
		})
	}


	// ===============================================================================
	// 			CREAR BIENVENIDA
	// ===============================================================================
	crearBienvenida() {
		// console.log("Primera vez")
	}



	// ===============================================================================
	// 			GENERATE SENDER
	// ===============================================================================
	generateSender(params) {
		let sender: any = {
			uid: params.senderUid,
			displayName: params.senderDisplayName,
			photoUrl: params.senderPhotoUrl
		}

		return sender
	}


	// ===============================================================================
	// 			GENERAR DESTINATARIO
	// ===============================================================================
	generateRecipient(params) {
		let recipient: any = {
			uid: params.uid,
			displayName: params.displayName, 
			photoUrl: params.photoUrl, 
			backgroundImage: params.recipientBackgroundImage, 
			backgroundColor: params.recipientBackgroundColor
		}

		return recipient
	}




	// ===============================================================================
	// 			FUNCIONES DE REDIMENSIÓN DE PANTALLA
	// ===============================================================================
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		let screenHeight = window.innerHeight;
		let screenWidth = window.innerWidth;
		this.alturaChat = screenHeight
	}
	scrollToBottom(): void {
		this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
		// console.log("scrollTop", this.feedContainer.nativeElement.scrollTop)
	}

	ngAfterViewInit(){
		this.scrollToBottom()
	}
}