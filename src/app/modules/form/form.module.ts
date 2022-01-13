import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Mapa
import { AgmCoreModule } from '@agm/core';
import {  MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { FormComponent, DialogAlert } from './form.component';
// import { DebesIniciarSesionComponent } from "./../../../../components/debes-iniciar-sesion/debes-iniciar-sesion.component";
//import { DebesIniciarSesionModule } from "./../../usuarios/debes-iniciar-sesion/debes-iniciar-sesion.module";

// import { ArchivosComponent } from "./../../../componentes/archivos/archivos.component";
// import { ArchivosModule } from "../../../../components/archivos/archivos.module";

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";
import { environment } from "../../../environments/environment";

// funciones
import { functionsForms } from "../../functions/functions-forms";

// Servicio Upload
import { FirebaseUploadService } from "../../services/firebase/firebase-upload.service";

// Modulos mios
import { LocationModule } from "../location/location.module";
import { UploaderModule } from "./../uploader/uploader.module";

// Service API
import { NoderestapiService } from "./../../../app/services/noderestapi.service";
import { HttpClientModule } from "@angular/common/http";


// QR
import { AnQrcodeModule } from 'an-qrcode';


const routes: Routes = [
  {
      path: '**',
      component: FormComponent,
      children: []
  }
];

@NgModule({
  declarations: [FormComponent, DialogAlert],
  entryComponents: [DialogAlert], 
  imports: [
    AnQrcodeModule, 
    CommonModule, 
    HttpClientModule, 
  // ArchivosModule,
  LocationModule, 
  UploaderModule, 

	RouterModule.forChild(routes),

  MatProgressBarModule,
  MatDialogModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatSnackBarModule, 
  //DebesIniciarSesionModule, 
  
    // Formularios
    FormsModule,
    ReactiveFormsModule,

    // Mapa
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBg1h9qOTfHoMU9xd6Wq3GUvuIdQVSX_qs'
    // }),
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    functionsForms, FirebaseUploadService, 
    NoderestapiService
  ],
})
export class FormModule { }
