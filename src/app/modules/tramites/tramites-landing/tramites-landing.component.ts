import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToolbarService } from "./../../../services/comunication/toolbar.service";
import { DatabaseService } from 'src/app/services/firebase/database.service';
import { recipient } from "./../../../interfaces/interfaces";


@Component({
	selector: 'app-tramites',
	templateUrl: './tramites-landing.component.html',
	styleUrls: ['./tramites-landing.component.sass']
})
export class TramitesLandingComponent implements OnInit {
	process:Array<recipient>
	

	constructor(
		private _toolbarService:ToolbarService, 
		private _databaseService:DatabaseService, 
		private _changeDetectorRef:ChangeDetectorRef
	) {
		this._toolbarService.dataToolbar.emit({ruta:'tramites-landing'})
	}


	ngOnInit(){
		this.getProcess()
	}
	
	getProcess(){
		this._databaseService._angularFireDatabase.database.ref('data/recipients').on('value', snapshot => {
			console.log("Datos:", snapshot.val())
			this.assignData(snapshot.val())
			
		})
	}

	assignData(data:Array<recipient>) {
		this.process = data
		this._changeDetectorRef.detectChanges()
	}
}
