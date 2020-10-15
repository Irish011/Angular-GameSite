import { Component, Input } from '@angular/core';
import { SignUpComponent } from './events/sign-up/sign-up.component';
import { InteractService } from '../app/interact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Project-Sidebar';

  logo:string="assets/images/angularr.png";
  name:string = "Guest";
  uname:string = "guest";

  isSideOpen = true;
  hover = false;
  contentMargin=240;
  trans=.8;

  constructor(private service:InteractService){}
    ngOnInit(){
      
      this.service.message$.subscribe(
        message => {
          this.name = message;
        }
      );

      this.service.message2$.subscribe(
        message2 => {
          this.uname = message2;
        }
      );
  }


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
