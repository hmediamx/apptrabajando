import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { Routes, RouterModule } from '@angular/router';

// Services
import { FirebaseUploadService } from "./../../services/firebase/firebase-upload.service";

const routes: Routes = [
	{
		path: "**",
		component: MediaComponent,
		children: []
	}
]


@NgModule({
  declarations: [MediaComponent],
  imports: [
	CommonModule, 
	RouterModule.forChild(routes), 
  ], 
  providers: [FirebaseUploadService]
})
export class MediaModule { }
