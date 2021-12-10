import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing.component';
import { Routes, RouterModule } from '@angular/router';

// services
import { NoderestapiService } from "./../../services/noderestapi.service";

export const routes: Routes = [
  {
    path        : '**', 
    component   : LandingComponent, 
    children: []
  }
];


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    HttpClientModule
  ], 
  providers: [NoderestapiService]
})
export class LandingModule { }
