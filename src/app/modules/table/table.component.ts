import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { NoderestapiService } from "./../../services/noderestapi.service";
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
// Services
import { ToolbarService } from 'src/app/services/comunication/toolbar.service';
import { tables } from "../../../assets/data/tables";
import { DatabaseService } from "./../../services/firebase/database.service";
// interfaces
import { gioTableInterface } from "./../../interfaces/interfaces";



@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent {
	table: gioTableInterface
	dataSource
	dataExists: boolean = false
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


	constructor
		(
			private _activatedRoute: ActivatedRoute,
			private api: NoderestapiService,
			private _matSnackBar: MatSnackBar,
			public _router: Router,
			public _toolbarService: ToolbarService,
			private _matDialog: MatDialog,
			private _databaseService: DatabaseService
		) {
		this._toolbarService.dataToolbar.emit(this._router.url)

		this._activatedRoute.paramMap.subscribe(params => {
			this.init(params['params']['table'])
		})
	}


	// ===============================================================================
	// 			INIT TABLE
	// ===============================================================================
	init(table) {
		this.table = tables[table];
		// We construct table from params received
		switch (this.table.processType) {
			case 'firebaseRealTime':
				this.constructWithFirebaseRealTimeDatabase();
				break;
		}
	}



	// ===============================================================================
	// 			CONSTRUCT WITH FIREBASE
	// ===============================================================================
	constructWithFirebaseRealTimeDatabase() {
		let ref = this._databaseService._angularFireDatabase.database.ref(this.table.path)

		ref.once('value', snapshot => {
			if (snapshot.val()) {
				this.dataSource = new MatTableDataSource(Object.values(snapshot.val()));
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
				this.dataExists = true;
			}
		})
	}



	// ===============================================================================
	// 			CONSTRUCT WITH API
	// ===============================================================================
	constructWithApiData() {
		this.loadDataFromApi(this.table.path);
	}



	// ===============================================================================
	// 			OPEN SNACKBAR
	// ===============================================================================
	openSnackBar(message: string, action: string): void {
		this._matSnackBar.open(message, action, {
			duration: 3000, 
		});
	}



	loadDataFromApi(path) {
		this.api.traerGenericos(path).subscribe(res => {
			this.dataSource = new MatTableDataSource(res['data']);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		})
	}


	// ===============================================================================
	// 			APPLY FILTER WHEN SEARCH TEXT
	// ===============================================================================
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}


	editItem(table, id) {
		this._router.navigate([`/form/${table}`, { id: id }])
	}


	askDeleteItem(element) {
		let id = element[this.table.elementForFilter]

		this.openDialog(
			id,
			"Borrar Elemento",
			"Si acepta, este borrará el elemento con el id: " + id + " de forma permanentemente.",
			"Cancelar",
			"Aceptar",
			true
		)
	}


	viewItem(table, id) {
		let route = this.table['path']
		let method = this.table['processType']
		// this._router.navigate([`/table-item/${route}/${id}/${method}`])

		this._router.navigate([`/table-item/${id}/${method}`, { route: route }])
	}

	deleteItem(id) {

		if (this.table.processType == 'firebaseRealTime') {

			this._databaseService._angularFireDatabase.database.ref(`${this.table['path']}/${id}`).remove(data => {
				console.log("Se ha eliminado ..." + data)
				this.openSnackBar("Se ha eliminado el registro correctamente", "Ok")

				this.constructWithFirebaseRealTimeDatabase()
			})

		} else if (this.table.processType == 'api') {
			this.api.borrarGenerico(this.table.path, id).subscribe(data => {
				console.log("El resultado de eliminar es: ", data)
				this.loadDataFromApi(this.table.path);
				this.openSnackBar("Se ha eliminado el registro correctamente", "Ok")
				this.constructWithFirebaseRealTimeDatabase()
			})
		}
	}

	// =============================================================
	//      OPEN DIALOGUE
	// =============================================================
	openDialog(_id, _title, _message, _cancelText, _acceptText, _cancel = true, _width = '250px'): void {
		const options = {
			width: _width,
			data: {
				_id,
				title: _title,
				message: _message,
				cancelText: _cancelText,
				acceptText: _acceptText,
				cancel: _cancel
			}
		}

		const dialogRef = this._matDialog.open(DialogAlert, options);

		dialogRef.afterClosed().subscribe(resultId => {
			if (resultId) {
				this.deleteItem(resultId)
			}
		});
	}
}



@Component({
	selector: 'dialog-alert',
	templateUrl: 'dialog-alert.html'
})
export class DialogAlert {

	constructor(
		public dialogRef: MatDialogRef<DialogAlert>,
		@Inject(MAT_DIALOG_DATA) public data
	) {
		// this.data = {
		//     titulo: "Formulario enviado",
		//     mensaje: "Su solicitud se ha envíado, su comprobante está listo para ser descargado.",
		//     resultado: true
		// }
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}