import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TableComponent, DialogAlert } from './table.component';
// Angular Material
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from '@angular/material/dialog';
// Services
import { NoderestapiService } from "./../../services/noderestapi.service";

const routes: Routes = [
	{
		path: "**",
		component: TableComponent,
		children: []
	}
]

@NgModule({
  declarations: [TableComponent, DialogAlert],
  entryComponents: [DialogAlert], 
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    HttpClientModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule, 
    MatSnackBarModule, 
    MatDialogModule
  ], 
  providers: [NoderestapiService]
})
export class TableModule { }
