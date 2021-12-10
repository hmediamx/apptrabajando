import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
	{
		path: '**',
		component: MenusComponent,
		children: []
	}
];

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    DragDropModule, 
    MatIconModule, 
    MatMenuModule, 
    MatButtonModule
  ]
})
export class MenusModule { }
