import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { NoderestapiService } from "./../../../services/noderestapi.service";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

// Cargando datos para crear la tabla de una forma dinámica
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarService } from 'src/app/services/comunication/toolbar.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Services
import { DatabaseService } from "./../../../services/firebase/database.service";

export interface USUARIOS_TABLA {
	id:string, 
	email:string, 
	nombre:string, 
	tipo:string
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent {
	dataComponent
	displayedColumns: string[];
	dataSource;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	data: any;
	_rows
	table
	

	


	constructor
		(
			private api: NoderestapiService,
			private _snackBar: MatSnackBar,
			private parametros: ActivatedRoute,
			public _router: Router,
			public _toolbar: ToolbarService,
			private _matDialog: MatDialog, 
			private _databaseService:DatabaseService
	) {
		this._toolbar.dataToolbar.emit(this._router.url)
		this.construirPagina()
	}


	// ===============================================================================
	// 			CONSTRUIR PÁGINA
	// ===============================================================================
	construirPagina() {

		this.dataComponent = {
			id: 'users', 
			displayedColumns: ['id', 'email', 'nombre', 'tipo', 'menu', 'edit', 'borrar'], 
			path: 'users', 
			method: 'realTimeDatabase', 
			pathDelete: 'users', 
			rows: [
				{
					_matColumnDef: 'id', 
					_name: 'ID', 
					_element : 'id', 
					_type: 'field'
				},
				{
					_matColumnDef: 'email', 
					_name: 'e-mail', 
					_element : 'email', 
					_type: 'field'
				},
				{
					_matColumnDef: 'nombre', 
					_name: 'Nombre', 
					_element : 'nombre', 
					_type: 'field'
				},
				{
					_matColumnDef: 'tipo', 
					_name: 'Tipo', 
					_element : 'tipo', 
					_type: 'field'
				}, 
				{
					_matColumnDef: 'menu', 
					_name: 'Menús', 
					_element : 'menu', 
					_type: 'menu'
				}, 
				{
					_matColumnDef: 'edit', 
					_name: 'Editar', 
					_element : 'edit', 
					_type: 'edit'
				}, 
				{
					_matColumnDef: 'borrar', 
					_name: 'Borrar', 
					_element : 'borrar', 
					_type: 'delete'
				}
			]
		};


		console.log("this.dataComponent", this.dataComponent)
		this.getUsersData()
	}



	getUsersData(){

		


		this._databaseService._angularFireDatabase.database.ref('users').on('value', snapshot => {
			let data = snapshot.val()
			let dataParsed:any = []

			console.log("values", snapshot.val())

			for ( let item in data ) {
				let element:Object = data[item]['profile']

				console.log("item: ", item)
				console.log("item: ", element)
				let row:any = {
					id: "", 
					email: "", 
					nombre: "", 
					tipo: ""
				}
				row.id = item

				if(element['email']) {
					row['email'] = element['email']
				}

				if(element['nombre']) {
					row['nombre'] = element['nombre']
				}

				if(element['userType']) {
					row['tipo'] = element['userType']
				}				
				
				dataParsed[item] = row
			}


			console.log("Datos son: ", dataParsed)
	
			// let objetoDataParsed = Object.values(dataParsed)

			// console.log("Objeto Parsed", objetoDataParsed )

			// const datos:USUARIOS_TABLA[] = [
			// 	{ id: "1", email: "email", nombre: "nombre", tipo: "tipo" }, 
			// 	{ id: "2", email: "email", nombre: "nombre", tipo: "tipo" }, 
			// 	{ id: "3", email: "email", nombre: "nombre", tipo: "tipo" }, 
			// 	{ id: "4", email: "email", nombre: "nombre", tipo: "tipo" }
			// ]

			this.dataSource = new MatTableDataSource( Object.values(dataParsed) );
			this.displayedColumns = this.dataComponent.displayedColumns;
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			this._rows = this.dataComponent.rows;
		})	
	}



	constructWithApiData(){
		this.loadDataFromApi(this.dataComponent.path);
		// this._rows = this.dataComponent.rows;
	}


	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 3000,
		});
	}



	loadDataFromApi(path) {
		this.api.traerGenericos(path).subscribe(res => {
			console.log("Se obtiene del servicio api:", res)
			this.dataSource = new MatTableDataSource(res['data']);
			this.displayedColumns = this.dataComponent.displayedColumns;
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		})
	}



	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}


	editMenu(uid) {
		console.log("uid a editar menú", uid)
		this._router.navigate([`/users-menus/${uid}`])
	}

	editItem(table, id){
		this._router.navigate([`/form/${table}`, {id: id}])
	}


	askDeleteItem(id) {
		this.openDialog(
			id, 
            "Borrar Elemento",
            "Si acepta, este borrará el elemento con el id: " + id + " de forma permanentemente.",
            "Cancelar",
			"Aceptar", 
			true
        )
	}



	deleteItem(id) {
		console.log("Path", this.dataComponent.pathDelete)
		console.log("id", id)

		let ultimatePath = `${this.dataComponent.pathDelete}/${id}`


		this._databaseService._angularFireDatabase.database.ref(ultimatePath).remove(data=>{
			console.log("Se ha eliminado ", data)
			this.openSnackBar("Se ha eliminado el registro correctamente", "Ok")
		})

		// this.api.borrarGenerico(this.dataComponent.pathDelete, id).subscribe(data => {
		// 	console.log("El resultado de eliminar es: ", data)
		// 	this.loadDataFromApi(this.dataComponent.path);
		// })
	}

	// =============================================================
	//      OPEN DIALOGUE
	// =============================================================
	openDialog(_id, _title, _message, _cancelText, _acceptText, _cancel = true, _width = '250px'): void {
		
		const dialogRef = this._matDialog.open(DialogAlert, {
			width: _width,
			data: {
				_id, 
				title: _title,
				message: _message,
				cancelText: _cancelText,
				acceptText: _acceptText,
				cancel: _cancel
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result) {
				this.deleteItem(result)	
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
