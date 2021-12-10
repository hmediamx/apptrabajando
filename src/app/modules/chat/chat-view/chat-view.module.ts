import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from "./chat-view.component";

// import { FlexLayoutModule } from '@angular/flex-layout';

// Modulos añadidos hay que revisarlos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "./../../../../environments/environment";

// Servicio Upload
import { FirebaseUploadService } from "./../../../services/firebase/firebase-upload.service";

const routes: Routes = [
  {
      path: '**',
      component: ChatViewComponent,
      children: []
  }
];


@NgModule({
  declarations: [ChatViewComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 

    //firebase
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireStorageModule, 
    AngularFireDatabaseModule, 


    // Modulos a revisar
    // FlexLayoutModule, 
    FormsModule, ReactiveFormsModule, 
    MatToolbarModule, MatMenuModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatSnackBarModule, MatProgressSpinnerModule
  ], 
  providers: [FirebaseUploadService]
})
export class ChatViewModule { }
