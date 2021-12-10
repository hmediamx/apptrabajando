import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "./../../../services/firebase/database.service";
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ChatContactsComponent } from "./chat-contacts.component";


@Component({
	selector: 'app-chat-list',
	templateUrl: './chat-list.component.html',
	styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
	chats

	constructor(
		private _databaseService: DatabaseService,
		private _bottomSheet: MatBottomSheet
	) {

		this._databaseService.datos.database.ref('/data-pruebas').push({
			data: "data"
		})

	}

	openBottomSheet(): void {
		this._bottomSheet.open(ChatContactsComponent, {
			panelClass: 'my-mat-bottom-sheet-container'
		});
	}

	ngOnInit(): void {
	}
}
