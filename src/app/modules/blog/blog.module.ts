import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogComponent } from "./blog.component";

const routes: Routes = [
  {
      path: '**',
      component: BlogComponent,
      children: []
  }
];

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
