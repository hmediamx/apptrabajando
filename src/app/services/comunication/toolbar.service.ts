import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  dataToolbar = new EventEmitter()
  page = new EventEmitter()

  constructor() { }
}