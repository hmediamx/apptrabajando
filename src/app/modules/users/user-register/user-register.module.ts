import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

// Componentes
import { UserRegisterComponent, ComponenteAlertasComponent } from './user-register.component';
// import { AlertaComponent } from "./../../../componentes/componente-alertas/alerta.component";
// import { ComponenteAlertasModule } from "./../../../herramientas/componente-alertas/componente-alertas.module";

// Firebase
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { environment } from "./../../../../../src/environments/environment";

const routes: Routes = [
  {
      path: '**',
      component: UserRegisterComponent,
      children: []
  }
];



@NgModule({
  declarations: [UserRegisterComponent, ComponenteAlertasComponent],
  entryComponents: [ComponenteAlertasComponent], 
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatStepperModule,
    MatSnackBarModule, 
    FormsModule, 
		ReactiveFormsModule
  ]
})
export class UserRegisterModule { }
