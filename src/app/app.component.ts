import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-Sidebar';

  logo:string="assets/images/angularr.png";

  isSideOpen = true;
  hover = false;
  contentMargin=240;
  trans=.8;

  onToolbarToogle() {
    
    this.isSideOpen=!this.isSideOpen;
     if(this.isSideOpen){
      this.contentMargin=240;
    }else{
      this.contentMargin=70;
    } 
    /*if(this.isSideOpen){
      this.hover=!this.hover
    }*/
    //this.contentMargin=240;
  }
}
