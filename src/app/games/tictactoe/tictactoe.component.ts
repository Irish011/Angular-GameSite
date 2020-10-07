import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {


  @ViewChild("buttons") buttons: ElementRef;
  @ViewChild("reset1") reset1: ElementRef;
  @ViewChild("button1") button1: ElementRef;
  @ViewChild("button2") button2: ElementRef;
  @ViewChild("button3") button3: ElementRef;
  @ViewChild("button4") button4: ElementRef;
  @ViewChild("button5") button5: ElementRef;
  @ViewChild("button6") button6: ElementRef;
  @ViewChild("button7") button7: ElementRef;
  @ViewChild("button8") button8: ElementRef;
  @ViewChild("button9") button9: ElementRef;
  @ViewChild("reset1") reset: ElementRef;
  a:number=0;
  b:string="X";
  c:string="O";
  d:boolean=false;
  e:string="Reset";
  myFunction(event)
    {
      if(this.a%2==0)
      {
          event.target.value=this.b;
          this.myWinner(event);
          this.a++;
          event.target.disabled=true;
      }
      else
      {  
        event.target.value=this.c;
        this.myWinner(event);
        this.a++;
        event.target.disabled=true;
      }
    }
  myWinner(event)
    {
      let divbutton1 =this.button1.nativeElement;
      let divbutton2=this.button2.nativeElement;
      let divbutton3=this.button3.nativeElement;
      let divbutton4=this.button4.nativeElement;
      let divbutton5=this.button5.nativeElement;
      let divbutton6=this.button6.nativeElement;
      let divbutton7=this.button7.nativeElement;
      let divbutton8=this.button8.nativeElement;
      let divbutton9=this.button9.nativeElement;
      if(divbutton1.value==this.b && divbutton2.value==this.b && divbutton3.value==this.b) 
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      } 
      else if(divbutton1.value==this.c && divbutton2.value==this.c && divbutton3.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton4.value==this.b && divbutton5.value==this.b && divbutton6.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton4.value==this.c && divbutton5.value==this.c && divbutton6.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton7.value==this.b && divbutton8.value==this.b && divbutton9.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton7.value==this.c && divbutton8.value==this.c && divbutton9.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton1.value==this.b && divbutton4.value==this.b && divbutton7.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton1.value==this.c && divbutton4.value==this.c && divbutton7.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton2.value==this.b && divbutton5.value==this.b && divbutton8.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton2.value==this.c && divbutton5.value==this.c && divbutton8.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton3.value==this.b && divbutton6.value==this.b && divbutton9.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton3.value==this.c && divbutton6.value==this.c && divbutton9.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton1.value==this.b && divbutton5.value==this.b && divbutton9.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton1.value==this.c && divbutton5.value==this.c && divbutton9.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton3.value==this.b && divbutton5.value==this.b && divbutton7.value==this.b)
      {
            alert("X is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(divbutton3.value==this.c && divbutton5.value==this.c && divbutton7.value==this.c)
      {
            alert("O is winner");
            this.d=true;
            this.myClear(event);
      }
      else if(this.d==false && this.a>=8)
      {
            alert("Game is draw");
            this.myClear(event);
            this.d=true;
      }
      }
  myClear(event)
    {
        let divbutton=this.buttons.nativeElement;
          for(let item of divbutton.children)
          {
              item.disabled=true;
          }        
    }
  myReset(event)
  {
      let divbutton1=this.buttons.nativeElement;
      for(let item of divbutton1.children)
      {
            item.value=" ";
            item.disabled=false;
      }
      this.a=0;
      this.d=false;
              
  }  


  constructor() { }

  ngOnInit(): void {
  }

}
