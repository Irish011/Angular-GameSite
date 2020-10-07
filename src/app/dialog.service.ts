import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { SignUpComponent } from './events/sign-up/sign-up.component';
import { BugformComponent } from './settings/bugform/bugform.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog,
    private formlog:MatDialog,
    private bugform:MatDialog) { }
  
  openConfirmDialog(){
  this.dialog.open(ConfirmComponent, {
    width:'500px',
    panelClass: 'confirm-dialog-container',
    disableClose: true
  });

  }

  openForm(){
    console.log("Form");
    this.formlog.open(SignUpComponent);
  }

  bugForm(){
    console.log("Bug");
    this.bugform.open(BugformComponent);
  }
}
