import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/firebase/database.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent{

	sitios

	constructor(
		private _databaseService: DatabaseService
	) {
		this.getSites()
	}


	getSites(){
		this._databaseService._angularFireDatabase.database.ref('data/sitios').on('value', snapshot => {
			this.sitios = snapshot.val()
		})
	}
}