import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableItemComponent } from "./table-item.component";


const routes: Routes = [
	{
		path: "**",
		component: TableItemComponent,
		children: []
	}
]

@NgModule({
  declarations: [TableItemComponent],
  imports: [
	CommonModule, 
	RouterModule.forChild(routes)
  ]
})
export class TableItemModule { }
