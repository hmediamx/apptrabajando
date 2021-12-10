import { Injectable } from '@angular/core';
// firebase
import { AngularFireDatabase } from "@angular/fire/database";
import { HttpClient } from "@angular/common/http";
import { keyframes } from '@angular/animations';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	listaDirecciones
	ref

	constructor(
		public _angularFireDatabase: AngularFireDatabase, 
		private _httpClient:HttpClient
	) {
		this.ref = this._angularFireDatabase.database.ref;
	}


	enviarDatos(data){
		this._angularFireDatabase.database.ref('datos').push(data);
		// console.log(data);
	}
  
	public traerDirecciones(){
	  let referencia = this._angularFireDatabase.database.ref('admin/data/direcciones')
	  let lista = this._angularFireDatabase.list(referencia)
  
	  return lista.valueChanges()
	}

	public getPath(path) {
		let ref = this._angularFireDatabase.database.ref(path)
		let data = this._angularFireDatabase.list(ref)
		return data.valueChanges()
	}


	getMessages(batch, path, lastkey?, ){
		let query = {
			orderByKey: true, 
			limitToFirst: batch
		}

		let q

		return this._angularFireDatabase.list(path, ref => {
			if (lastkey) { let q = ref.limitToFirst(batch).orderByKey().startAt(lastkey); }
			else { let q = ref.limitToFirst(batch).orderByKey(); } 
      		return q;
		})

	}


	getChatsKeys(url){
		return this._httpClient.get(url)
	}
}
