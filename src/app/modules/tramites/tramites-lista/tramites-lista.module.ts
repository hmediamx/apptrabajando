import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TramitesListaComponent } from "./tramites-lista.component";
import { RouterModule, Routes } from "@angular/router";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";


const routes:Routes = [
  {
    path: "**",
    component: TramitesListaComponent,
    children: []
  }
]

@NgModule({
  declarations: [TramitesListaComponent],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),

	MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ]
})
export class TramitesListaModule { }
