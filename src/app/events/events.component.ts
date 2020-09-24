import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }
  events(){
    this.dialogService.openConfirmDialog();
  }
  signup(){
    this.dialogService.openForm();
    }
}
