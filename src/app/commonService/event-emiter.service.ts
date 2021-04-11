import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  language = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  changeLanguage() {    
    this.language.emit();    
  }    
}