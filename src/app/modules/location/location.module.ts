import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent, MapComponent } from './location.component';
import { HttpClientModule } from "@angular/common/http";
// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// AGM Core Module
import { AgmCoreModule } from '@agm/core';
// Import Variables
import { environment } from "./../../../environments/environment";



@NgModule({
  declarations: [LocationComponent, MapComponent], 
  entryComponents: [MapComponent], 
  exports: [LocationComponent, MapComponent], 
  imports: [
    CommonModule, 
    MatDialogModule,
    MatButtonModule,
    MatIconModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLag-WtDsXU3HevxLG-GG_de5ZVKgFGVE'
    }), 
    HttpClientModule
  ], 
  providers: [AgmCoreModule]
})
export class LocationModule { }
