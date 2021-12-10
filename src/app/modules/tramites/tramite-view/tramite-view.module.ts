import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// Components
import { TramiteViewComponent, DialogAlert } from "./tramite-view.component";

// import { FlexLayoutModule } from '@angular/flex-layout';

// Modulos añadidos hay que revisarlos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { BUCKET } from '@angular/fire/storage';

// Modulos mios
import { LocationModule } from "./../../location/location.module";
import { UploaderModule } from "./../../uploader/uploader.module";

import { environment } from './../../../../environments/environment';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { functionsForms } from 'src/app/functions/functions-forms';
import { FirebaseUploadService } from 'src/app/services/firebase/firebase-upload.service';
import { NoderestapiService } from 'src/app/services/noderestapi.service';




const routes: Routes = [
  {
    path: '**',
    component: TramiteViewComponent,
    children: []
  }
];


@NgModule({
  declarations: [TramiteViewComponent, DialogAlert], 
  entryComponents: [DialogAlert], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    // Share
    AngularFireDatabaseModule,
    // Modulos a revisar
    // FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
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
    LocationModule, 
    UploaderModule
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    functionsForms, FirebaseUploadService, 
    NoderestapiService
  ],
})
export class TramiteViewModule { }
