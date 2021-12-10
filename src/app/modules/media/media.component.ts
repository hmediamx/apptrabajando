import { Component, OnInit, Inject } from '@angular/core';

// Services
import { FirebaseUploadService } from "./../../services/firebase/firebase-upload.service";
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
	media

	constructor(
		@Inject(DOCUMENT) document, 
		private _firebaseUploadService: FirebaseUploadService
		) {

		this._firebaseUploadService.archivos.storage.ref('/').list().then(data => {
			console.log("La data es: ", data.items)
			this.media = data.items


			for(let element in data.items) {
				console.log( data.items[element]['location']['path'] )
			}
		})
	}

	ngOnInit(): void {
	}


	loadMedia(id, item){
		console.log("El ID es: ", id)
		console.log("El item es: ", item)

		this._firebaseUploadService.archivos.storage.ref(item).getDownloadURL().then(data=>{
			console.log(data)
			document.getElementById(id)['src'] = data
		})
		
	}


	deleteMedia(id, item){
		console.log("El ID es: ", id)
		console.log("El item es: ", item)

		this._firebaseUploadService.archivos.storage.ref(item).delete().then(data => {
			console.log("Se eliminó ", data)
		}).catch( error => {
			console.log("Error: ", error)
		})
		
	}
}
