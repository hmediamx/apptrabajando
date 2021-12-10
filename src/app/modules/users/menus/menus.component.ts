import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/firebase/database.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-menus',
	templateUrl: './menus.component.html',
	styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
	uid
	user_items
	menu_items


	constructor(
		private _activatedRoute: ActivatedRoute,
		private _databaseService: DatabaseService
	) {

	}


	ngOnInit(): void {
		this._activatedRoute.params.subscribe(params => {
			this.uid = params['uid']
		})

		this.getMenus()
		this.getUserMenu()
	}


	getUserMenu():void{
		let path = `users/${this.uid}/menu`;
		let ref = this._databaseService._angularFireDatabase.database.ref(path)

		ref.once('value', snapshot => {
			console.log("Valores user menu", snapshot.val())
			this.user_items = Object.values(snapshot.val())
		})
	}


	getMenus(): void {
		this._databaseService._angularFireDatabase.database.ref('data/menu_items').once('value', snapshot => {
			this.menu_items = Object.values(snapshot.val())
		})
	}


	// drop(event: CdkDragDrop<string[]>) {

	// 	if (event.previousContainer === event.container) {
	// 		moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

	// 		console.log("event.container.data", event.container.data)
	// 	} else {
	// 		transferArrayItem(event.previousContainer.data,
	// 			event.container.data,
	// 			event.previousIndex,
	// 			event.currentIndex);
	// 	}
	// }



	dropMenuItem(event) {
		console.log("Drop Menus")

			if (event.previousContainer === event.container) {
				// moveItemInArray(this.menu_items, event.previousIndex, event.currentIndex);
				console.log("Reordenando Array", event.container.data)
			} else {
				console.log("Recibiendo item de otro Array")
				
				transferArrayItem(event.previousContainer.data,
					this.menu_items,
					event.previousIndex,
					event.currentIndex);
			}
		
	}


	dropUserItem(event){
		console.log("Drop User Items", event)

		if (event.previousContainer === event.container) {
			moveItemInArray(this.user_items, event.previousIndex, event.currentIndex);
			console.log("Reordenando array users")
			console.log(this.user_items)
			// event.previousIndex.removeItem()

		} else {
			console.log("Transfiriendo a este array")

			copyArrayItem(event.previousContainer.data,
				this.user_items,
				event.previousIndex,
				event.currentIndex);
		}
	}


	itemClick(event){

		console.log("El evento es: ", event)
		let index = event.key
		this.user_items.splice(index, 1)
		
	}

	saveArray(){
		console.log("Guardando menú", this.user_items)


		let path = `users/${this.uid}/menu`;
		let ref = this._databaseService._angularFireDatabase.database.ref(path)

		ref.set(this.user_items)
	}
}
