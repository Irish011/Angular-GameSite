import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  private MessageSource = new Subject<string>();
  private messageSource = new Subject<string>();
  message$ = this.MessageSource.asObservable();
  message2$ = this.messageSource.asObservable();
  constructor() { }

  sendMessage(message:string){
    this.MessageSource.next(message);
  }
  sendUsername(message2:string){
    this.messageSource.next(message2);
  }
}
