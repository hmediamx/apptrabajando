import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from "./chat-list.component";
import { ChatContactsComponent } from "./chat-contacts.component";
import { DatabaseService } from "./../../../services/firebase/database.service";

// Material
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

// Material Usando
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

// Services
import { AuthService } from "./../../../services/firebase/auth.service";
import { ToolbarService } from "./../../../services/comunication/toolbar.service";


export const routes: Routes = [
  {
    path        : '**', 
    component   : ChatListComponent, 
    children: []
  }
];

@NgModule({
  declarations: [ChatListComponent, ChatContactsComponent], 
  entryComponents: [ChatContactsComponent], 
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    // Material
    MatIconModule, 
    MatDialogModule, 
    MatDialogModule, 
    MatBadgeModule, 
    // Material usando
    MatBottomSheetModule, 
    MatButtonModule, 
    MatListModule
  ], 
  providers:[DatabaseService, AuthService, ToolbarService]
})
export class ChatListModule { }
