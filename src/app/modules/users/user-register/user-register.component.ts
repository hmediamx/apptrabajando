import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
// firebase
import { AuthService } from "./../../../services/firebase/auth.service";
import { DatabaseService } from "./../../../services/firebase/database.service";
// Dialogo
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ComponenteAlertasComponent } from "./../../../herramientas/componente-alertas/componente-alertas.component";
// Servicios
import { PaginaActualService } from "./../../../services/comunication/pagina-actual.service";
//Modelos
import { gioUser } from "../../../models/user.model";

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
	gioUser
	registerForm: FormGroup;
	redireccion: string


    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
	constructor(
		private _formBuilder: FormBuilder,
		public dialog: MatDialog,
		private _auth: AuthService,
		private datos: DatabaseService,
		private router: Router,
		public paginaActual: PaginaActualService
	) {
		this.redireccionarInicio()
		this.construirFormulario()
	}



	// =============================================================
	//      PROCESAR FORMULARIO
	// =============================================================
	processForm(){
		let displayName = this.registerForm.value.displayName
		let email = this.registerForm.value.email
		this.gioUser = new gioUser(email, displayName)
		this.createUser(email)
	}



	// =============================================================
	//      CREAR USUARIO
	// =============================================================
	createUser(email) {
		this._auth._auth.createUserWithEmailAndPassword(email, this.registerForm.value.password).then(dataSesion=>{
			console.log("Se creó")
			this._auth.updateUserAuth(dataSesion, this.gioUser)
			this._auth.saveUserToDatabaseFromFirebaseSesion(dataSesion, this.gioUser)
		})
	}



	// =============================================================
	//      MOSTRAR ERROR DE REGISTRO
	// =============================================================
	mostrarErrorRegistro(error) {
		console.log(error)
		let tipoDeError = error.code
		let configuracionDialogo: MatDialogConfig = {};


		switch (tipoDeError) {
			case "auth/invalid-email":
				configuracionDialogo.data = { mensaje: "El correo electrónico no es valido", cancelar: false }
				break;
			case "auth/weak-password":
				configuracionDialogo.data = { mensaje: "El password es demasiado fácil, intenta usar al menos seis letras.", cancelar: false }
				break;
			case "auth/email-already-in-use":
				configuracionDialogo.data = { mensaje: "Este mail ya está siendo usado en otra cuenta.", cancelar: false }
				break;
			default:
				configuracionDialogo.data = { mensaje: "Ocurrió un error desconocido", cancelar: false }
				break;
		}
		this.dialog.open(ComponenteAlertasComponent, configuracionDialogo);
	}



	// =============================================================
	//      REDIRECCIONAR DE INICIO
	// =============================================================
	redireccionarInicio() {
		if (this.paginaActual.getPaginaActual()) {
			this.redireccion = this.paginaActual.getPaginaActual()
		} else {
			this.redireccion = "/"
		}
	}



	// =============================================================
	//      REDIRECCIONAR
	// =============================================================
	redireccionar() {
		this.router.navigate([this.redireccion])
	}



	// =============================================================
	//      ARMAR FORMULARIO
	// =============================================================
	construirFormulario() {
		this.registerForm = this._formBuilder.group({
			displayName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
			passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
			leidoAceptado: new FormControl('', Validators.required)
		});

		this.registerForm.get('password').valueChanges.subscribe(() => {
			this.registerForm.get('passwordConfirm').updateValueAndValidity()
		});
	}

}




/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

	if (!control.parent || !control) {
		return null;
	}

	const password = control.parent.get('password');
	const passwordConfirm = control.parent.get('passwordConfirm');

	if (!password || !passwordConfirm) {
		return null;
	}

	if (passwordConfirm.value === '') {
		return null;
	}

	if (password.value === passwordConfirm.value) {
		return null;
	}

	return { 'passwordsNotMatching': true };
};








export interface DialogData {
	mensaje: string;
	cancelar: boolean;
}



@Component({
	selector: 'app-componente-alertas',
	templateUrl: './register-alerts.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class ComponenteAlertasComponent {
	mensaje: string

	constructor(
		private dialogRef: MatDialogRef<ComponenteAlertasComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {
		this.mensaje = data.mensaje
	}

	cerrarDialogo() {
		console.log("Se ha cerrado el cuadro de dialogo.")
	}

	onNoClick(): void {
		console.log("On No Click")
		this.dialogRef.close();
	}
}
