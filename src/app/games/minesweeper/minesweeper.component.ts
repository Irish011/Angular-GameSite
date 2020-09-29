import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit {
  @ViewChild("buttons") buttons: ElementRef;
  @ViewChild("reset1") reset1: ElementRef;
  p:number=0;
  a:string="Reset";
  b:any="assets/images/bomb.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  myBomb(event)
  {
      console.log(this.buttons);
      event.target.value=[this.b];
      alert("Game Over");
      let divbutton = this.buttons.nativeElement;
      //console.log(divbutton.children);
      for (let item of divbutton.children)
      {
        if(item.name =='safe')
        {
          item.disabled=true;
        }
        if(item.name="1")
        {
          item.disabled=true;
        }
        if(item.name="2")
        {
          item.disabled=true;
        }
        if(item.name="3")
        {
          item.disabled=true;
        }
        if(item.name="B")
        {
          item.disabled=true;
        }
      }
      // [...divbutton.children].forEach(btn=>btn.value='0');
      
      //To access safe button 1
      //let btn1 = this.safeButton1.nativeElement;
      //btn1.value ='S';
      //alert("Game Over");
      //this.myReset(event);
  }
  my1(event)
  {
    event.target.value="1";
    this.p=this.p+1;
    if(this.p>=49)
  {
    alert('You win');  
  }
  }
  my2(event)
  {
    event.target.value="2";
    this.p=this.p+1;
    if(this.p>=49)
  {
    alert('You win');  
  }
  }
  my3(event)
  {
    event.target.value="3";
    this.p=this.p+1;
    if(this.p>=49)
  {
    alert('You win');  
  }
  }
  mySafe(event)
  {
    event.target.value="S";
    this.p=this.p+1;
    if(this.p>=49)
  {
    alert('You win'); 
    let divbutton = this.buttons.nativeElement;
    for (let item of divbutton.children)
      {
        if(item.name =='safe')
        {
          item.disabled=true;
        }
        if(item.name="1")
        {
          item.disabled=true;
        }
        if(item.name="2")
        {
          item.disabled=true;
        }
        if(item.name="3")
        {
          item.disabled=true;
        }
        if(item.name="B")
        {
          item.disabled=true;
        }
      }
  }
  
  }
  myReset(event)
  {
    let divbutton = this.buttons.nativeElement;
    for (let item of divbutton.children)
    {
          item.value=" "
          item.disabled=false;
        }   
    }
  }


