import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderSingleComponent, UploaderMultipleComponent } from './uploader.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [UploaderSingleComponent, UploaderMultipleComponent], 
  entryComponents: [UploaderSingleComponent, UploaderMultipleComponent], 
  exports:[
    UploaderSingleComponent, UploaderMultipleComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressBarModule, MatListModule, 
    AngularFireStorageModule,
  ]
})
export class UploaderModule { }
