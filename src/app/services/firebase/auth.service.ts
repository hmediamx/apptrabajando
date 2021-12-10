import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { auth } from 'firebase';



@Injectable({
	providedIn: 'root'
})
export class AuthService {
	dbRoute:String = 'users'
	gioUsuario = new EventEmitter()
	gioUserData = new EventEmitter()

	constructor(
		public _auth: AngularFireAuth,
		public _db: AngularFireDatabase,
	) {

		this._auth.onAuthStateChanged(data => {
			
			if(data){
				// console.log("Usuario cambiado a", data)
				// console.log(data['refreshToken'])
				
				this.gioUsuario.emit(data)
				this.getUserData(data['uid'])
				
			} else {
				this.gioUserData.emit(null)
			}
		})

	}


	getUserData(uid){
		let path = `${this.dbRoute}/${uid}/profile`

		// console.log("Running path data in ...", path)

		this._db.database.ref(path).on('value', snapshot=>{
			// console.log("The user data obtained is ... ", snapshot.val())
			this.gioUserData.emit(snapshot.val())
		})
	}
	

	

	// ============================================================
	// 		UPDATE USER AUTH
	// ============================================================
	updateUserAuth(userSesion, gioUser) {
		let _displayName = gioUser._displayName
		let _email = gioUser._email
		let _photoURL = gioUser._photoURL
		let _phoneNumber = gioUser._phoneNumber

		let newProfile = {
			displayName: _displayName, 
			email: _email, 
			photoURL: _photoURL, 
			phoneNumber: _phoneNumber
		}
		
		userSesion.user.updateProfile(newProfile).then(()=>{
			console.log("updateProfile success", newProfile)
		}).catch(error=>{
			console.log("An error ocurred in updateProfile", error)
		})
	}



	// ============================================================
	// 		SAVE OR UPDATE DATA IN FIREBASE DATABASE
	// ============================================================
	saveUserToDatabaseFromFirebaseSesion(dataSesion, gioUser){
		let user = dataSesion['user']
		let dataUser:any = {}
		
		if(user['uid']) {
			dataUser['uid'] = user['uid']
		}

		if(gioUser['_displayName']) {
			dataUser['displayName'] = gioUser['_displayName']
		}

		if(gioUser['_email']) {
			dataUser['email'] = gioUser['_email']
		}

		if(gioUser['_photoURL']) {
			dataUser['photoURL'] = gioUser['_photoURL']
		}

		dataUser['userType'] = 'subscriber'		
		let path = `${this.dbRoute}/${user['uid']}/profile`

		this._db.database.ref(path).set(dataUser).then(()=>{
			// console.log("Data user has been saved to the database.")
		}).catch(error=>{
			// console.log("An error occurred while saving the user to the database.", error)
		})
	}


	// ============================================================
	// 		INICIAR SESION FACEBOOK
	// ============================================================
	facebookAuth() {
		return this.AuthLogin(new auth.FacebookAuthProvider)
	}


	// ============================================================
	// 		INICIAR SESION FACEBOOK
	// ============================================================
	googleAuth() {
		return this.AuthLogin(new auth.GoogleAuthProvider)
	}


	// ============================================================
	// 		GENERICO CON PROVIDER
	// ============================================================
	AuthLogin(provider) {
		return this._auth.signInWithPopup(provider)
			.then((result) => {
				// console.log('You have been successfully logged in!')
			}).catch((error) => {
				// console.log(error)
			})
	}


	// ============================================================
	// 		CERRAR SESIÓN
	// ============================================================
	closeSesion() {
		// console.log("Vamos a cerrar la sesión")
		this._auth.signOut().then(then=>{
			// console.log("Then", then)
		}).catch(error=>{
			// console.log("Error", error)
		})
	}


	// ============================================================
	// 		TRAER UID DE USARIO
	// ============================================================
	traerUidSiExisteUsuario() {
		if (this._auth.currentUser) {
			return this._auth.currentUser['uid']
		} else {
			return null;
		}
	}
}



// ============================================================
// 		LISTA DE CÓDIGOS EN DESUSO
// ============================================================


// SE USABA PARA PASAR EL PIPE COMO ASYNCRONO DE LOS DATOS DE USUARIOS
// SE USA EN EL TEMLATE COMO :   *ngIf="_auth.gioUsuario | async as usuario; else login"
// UTILIZA EL IMPORT: import { map } from "rxjs/operators";
// =============================================
// gioUsuario = this._auth.authState.pipe(
// 	map(authState => {
// 		if (authState) {
// 			return authState
// 		} else {
// 			return false
// 		}
// 	})
// )