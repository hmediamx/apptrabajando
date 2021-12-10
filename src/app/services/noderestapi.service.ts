import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class NoderestapiService {

	url

	constructor(private http: HttpClient) {
		this.url = environment.url
	}



	getData(data){
		return this.http.get(`https://us-central1-ecatepecapp.cloudfunctions.net/app/data/get/${data}`);
	}

	

	traerEmpresaPorNombre(empresa){
		return this.http.get(`${this.url}/get/empresapornombre/${empresa}`);
	}

	traerDepartamento(id){
		return this.http.get(`${this.url}/get/departamentos/${id}`);
	}


	

	consultarBusqueda(busqueda){
		return this.http.post(`${this.url}/busqueda/general`, busqueda)
	}


	// ===============================================================
	// ================== 		GENÉRICOS			======================
	traerGenericos(path){
		return this.http.get(`${this.url}/get/${path}`)
	}

	borrarGenerico(path, id){
		return this.http.delete(`${this.url}/delete/${path}/${id}`);
	}

	guardarGenerico(path, data:any) {
		return this.http.post(`${this.url}/post/${path}`, data)
	}

	updateGeneric(path, data:any) {
		return this.http.put(`${this.url}/put/${path}`, data)
	}

	getGeneric(path, id){
		return this.http.get(`${this.url}/get/${path}/${id}`);
	}

	getGenericByField(path, field){
		return this.http.get(`${this.url}/get/${path}/${field}`);
	}
	// ===============================================================
	// ================== 		EMPRESAS		======================

	guardarEmpresa(empresa:any) {
		return this.http.post(`${this.url}/post/empresa`, empresa)
	}

	traerEmpresas(){
		return this.http.get(`${this.url}/get/empresas`);
	}

	traerEmpresa(id){
		return this.http.get(`${this.url}/get/empresa/${id}`);
	}

	borrarEmpresa(id){
		return this.http.delete(`${this.url}/delete/empresa/${id}`);
	}


	actualizarEmpresa(empresa:any){
		return this.http.put(`${this.url}/put/empresa`, empresa)
	}


	// ===============================================================
	// ================== 		USUARIO			======================
	
	guardarUsuario(usuario:any) {
		return this.http.post(`${this.url}/post/usuario`, usuario)
	}

	traerUsuarios(){
		return this.http.get(`${this.url}/get/usuarios`)
	}

	traerUsuario(uid){
		return this.http.get(`${this.url}/get/usuariobyuid/${uid}`)
	}

	borrarUsuario(uid){
		console.log("Se va a borrar el usuario" + uid)
		return this.http.delete(`${this.url}/delete/usuario/${uid}`);
	}

	// ===============================================================
	// ================== 		DEPARTAMENTO	======================
	
	traerDepartamentos(){
		return this.http.get(`${this.url}/get/departamentos`)
	}

	guardarDepartamento(departamento:any){
		return this.http.post(`${this.url}/post/departamentos`, departamento)
	}

	borrarDepartamento(id){
		return this.http.delete(`${this.url}/delete/departamentos/${id}`);
	}



	// ===============================================================
	// ================== 		DESARROLLOS		======================

	guardarDesarrollo(desarrollo:any) {
		return this.http.post(`${this.url}/post/desarrollo`, desarrollo)
	}

	actualizarDesarrollo(desarrollo:any) {
		return this.http.put(`${this.url}/put/desarrollo`, desarrollo)
	}

	traerDesarrollos(){
		return this.http.get(`${this.url}/get/desarrollos`);
	}

	traerDesarrolloPorId(id){
		return this.http.get(`${this.url}/get/desarrollo/${id}`);
	}

	traerDesarrollo(nombre){
		return this.http.get(`${this.url}/get/desarrollonombre/${nombre}`);
	}

	borrarDesarrollo(id){
		return this.http.delete(`${this.url}/delete/desarrollo/${id}`);
	}




	// ===============================================================
	// ================== 		FAVORITOS		======================
	guardarFavorito(favorito:any) {
		return this.http.post(`${this.url}/post/favorito`, favorito)
	}
	
	traerFavoritos(uid){
		return this.http.get(`${this.url}/get/favoritos/${uid}`);
	}
}