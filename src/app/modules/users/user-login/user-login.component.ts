import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
// firebase
import { AuthService } from "./../../../services/firebase/auth.service";
import { Router } from "@angular/router";

// Dialog
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ComponenteAlertasComponent } from "./../../../herramientas/componente-alertas/componente-alertas.component";

// Servicio página actual
import { PaginaActualService } from "./../../../services/comunication/pagina-actual.service";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    iconFacebook = faFacebookSquare
    iconMail = faEnvelope

  errorMail:boolean;
    errorMailMensaje:string;
    loginForm: FormGroup;
    configuracionDialogo:MatDialogConfig;

    

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        public autorizacion: AuthService,
        public dialog: MatDialog,
        private router: Router,
        public paginaActual:PaginaActualService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        this.configuracionDialogo = {}

        // Login Form
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });


        // this.autorizacion.observandoLogin().
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    iniciarSesion() {
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;

        this.autorizacion._auth.signInWithEmailAndPassword(email, password).then( event => {
            console.log("EVENTO", event)
            // Si el login es correcto, navegamos a la página actual desde el servicio
            this.paginaActual.navegarPaginaActual()

        }).catch( error => {


            switch(error.code) {
                case "auth/invalid-email":
                    this.configuracionDialogo.data = { mensaje: "El correo electrónico es invalido", cancelar: false }
                    break;
                case "auth/user-not-found":
                    this.configuracionDialogo.data = { mensaje: "El usuario ingresado no existe en nuestro sistema", cancelar: false }
                    break;
                case "auth/wrong-password":
                    this.configuracionDialogo.data = { mensaje: "Contraseña incorrecta", cancelar: false }
                    break;
                default:
                    this.configuracionDialogo.data = { mensaje: "Ocurrió un error desconocido", cancelar: false }
                    break;
            }

            const dialogoMapa = this.dialog.open(ComponenteAlertasComponent, this.configuracionDialogo);
        })
    }

    


    olvidePassword():void {

        this.configuracionDialogo.data = {
            mensaje: "Le envíaremos un enlace de recuperación.",
            cancelar: true
        }

        const alertaGenerada = this.dialog.open( ComponenteAlertasComponent, this.configuracionDialogo)

        alertaGenerada.afterClosed().subscribe(result => {

            this.autorizacion._auth.sendPasswordResetEmail(result).then(data=>{

                this.configuracionDialogo.data = {
                    mensaje: "Le hemos envíado un correo de recuperación a "+result,
                    cancelar: false
                }
                this.dialog.open( ComponenteAlertasComponent, this.configuracionDialogo)

            }).catch(error=>{

                switch(error.code) {
                case "auth/invalid-email":
                    this.configuracionDialogo.data = { mensaje: "El correo proporcionado es invalido", cancelar: false }
                    break;
                case "auth/user-not-found":
                    this.configuracionDialogo.data = { mensaje: "El usuario ingresado no existe en nuestro sistema", cancelar: false }
                    break;
                case "auth/argument-error":
                    this.configuracionDialogo.data = { mensaje: "No se envío nada.", cancelar: false }
                    break;
                default:
                    this.configuracionDialogo.data = { mensaje: "Ocurrió un error desconocido", cancelar: false }
                    break;
                }

                this.dialog.open(ComponenteAlertasComponent, this.configuracionDialogo);
            })
        });


        // this.dialog.open(ComponenteAlertasComponent, this.configuracionDialogo);
    }

}





export interface DialogData {
	mensaje: string;
	cancelar: boolean;
}



@Component({
	selector: 'app-componente-alertas',
	templateUrl: './componente-alertas.component.html',
	styleUrls: ['./user-login.component.scss']
})
export class ComponenteAlertasComponent {
	mensaje: string;
    cancelar;
    mail;
    algo

	constructor(
		private dialogRef: MatDialogRef<ComponenteAlertasComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
		) {
			this.mensaje = data.mensaje
			this.cancelar = data.cancelar
		}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
