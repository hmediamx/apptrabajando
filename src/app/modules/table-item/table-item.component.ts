import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/firebase/database.service';

@Component({
	selector: 'app-table-item',
	templateUrl: './table-item.component.html',
	styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {
	item:any

	constructor(
		private _activatedRoute: ActivatedRoute, 
		private _databaseService:DatabaseService
	) {
		this.init()
	}

	ngOnInit(): void {
	}



	// ===============================================================================
	// 			CONSTRUIR PÁGINA
	// ===============================================================================
	init() {

		this._activatedRoute.paramMap.subscribe(data => {
			
			console.log(data)

			let route = `${data['params']['route']}/${data['params']['id']}`

			console.log("route", route)

			this._databaseService._angularFireDatabase.database.ref(route).once('value', snapshot => {
				console.log(snapshot.val())
				this.item = snapshot.val()
			})

		})

	}

}
