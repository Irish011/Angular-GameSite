import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor( private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  bug(){
    console.log("Working");
    this.dialogService.bugForm();
  }

  Dark(){
    console.log("wORKING");
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }
}
