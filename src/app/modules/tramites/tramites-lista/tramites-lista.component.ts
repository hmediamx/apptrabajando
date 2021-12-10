import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DatabaseService } from 'src/app/services/firebase/database.service';



@Component({
	selector: 'app-tramites-lista',
	templateUrl: './tramites-lista.component.html',
	styleUrls: ['./tramites-lista.component.sass']
})
export class TramitesListaComponent {
	color: string
	tramites: any
	process



	constructor(
		private parametros: ActivatedRoute, 
		private _databaseService:DatabaseService
	) {

		// Obtiene el id de la dirección
		let destinatario = this.parametros.snapshot.paramMap.get('id')
		this.getTramitesLista(destinatario)
		
	}

	getTramitesLista(destinatario) {
		console.log("El destinatario es: ", destinatario)

		this._databaseService._angularFireDatabase.database.ref('data/tramites').on('value', snapshot => {
			console.log("Data: ", snapshot.val())
			this.process = snapshot.val()

			this.color = "rgba(" + this.process[destinatario].colorRgba + ", 0.3)"
			this.tramites = this.process[destinatario].tramites

			console.log("this.tramites", this.tramites)
		})

	}
}
