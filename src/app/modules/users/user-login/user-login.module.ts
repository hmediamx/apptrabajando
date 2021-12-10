import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
// Componentes
import { UserLoginComponent, ComponenteAlertasComponent } from "./user-login.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { ComponenteAlertasModule } from "./../../../herramientas/componente-alertas/componente-alertas.module";

const routes: Routes = [
	{
		path: '**',
		component: UserLoginComponent,
		children: []
	}
];


@NgModule({
	declarations: [UserLoginComponent, ComponenteAlertasComponent],
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
		ReactiveFormsModule, 
		FontAwesomeModule
	]
})
export class UserLoginModule { }
