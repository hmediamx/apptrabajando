import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatsListComponent, BottomSheet } from "./chats-list.component";

// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";
// import { DatabaseService } from "./../../../services/firebase/database.service";

// Modulos añadidos hay que revisarlos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
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

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";
import { environment } from "./../../../../environments/environment";
import { DatabaseService } from 'src/app/services/firebase/database.service';

const routes: Routes = [
  {
      path: '**',
      component: ChatsListComponent,
      children: []
  }
];


@NgModule({
  declarations: [ChatsListComponent, BottomSheet],
  entryComponents: [BottomSheet], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    HttpClientModule, 

    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    // Modulos a revisar
    // FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatBottomSheetModule, MatBadgeModule, MatListModule, MatToolbarModule, MatMenuModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatSnackBarModule
  ], 
  providers:[DatabaseService]
})
export class ChatsListModule { }
