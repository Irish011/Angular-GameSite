import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent{

  title = 'sodoku'; 
  a:string="Check Winner";
  b:string="Reset";
  a1:number=0;
  my1_1:string;
  my1_2:string;
  my1_3:string;
  my1_4:string;
  my1_5:string;
  my1_6:string;
  my2_1:string;
  my2_2:string;
  my2_3:string;
  my2_4:string;
  my2_5:string;
  my2_6:string;
  my2_7:string;
  my3_1:string;
  my3_2:string;
  my3_3:string;
  my3_4:string;
  my3_5:string;
  my3_6:string;
  my4_1:string;
  my4_2:string;
  my4_3:string;
  my4_4:string;
  my4_5:string;
  my4_6:string;
  my4_7:string;
  my5_1:string;
  my5_2:string;
  my5_3:string;
  my5_4:string;
  my5_5:string;
  my5_6:string;
  my6_1:string;
  my6_2:string;
  my6_3:string;
  my6_4:string;
  my7_1:string;
  my7_2:string;
  my7_3:string;
  my7_4:string;
  my7_5:string;
  my7_6:string;
  my8_1:string;
  my8_2:string;
  my8_3:string;
  my8_4:string;
  my9_1:string;
  my9_2:string;
  my9_3:string;
  my9_4:string;
  my9_5:string;
  game:boolean;
  myFunction()
  {
      if(this.my1_1=="1" && this.my1_2=="1" && this.my1_3=="1" && this.my1_4=="1" && this.my1_5=="1" && this.my1_6=="1")
      {
            this.game=true; 
      }
       if(this.my2_1=="2" && this.my2_2=="2" && this.my2_3=="2" && this.my2_4=="2" && this.my2_5=="2" && this.my2_6=="2" && this.my2_7=="2")
      {
            this.game=true;          
      }
       if(this.my3_1=="3" && this.my3_2=="3" && this.my3_3=="3" && this.my3_4=="3" && this.my3_5=="3" && this.my3_6=="3")
      {
            this.game=true;          
      }
       if(this.my4_1=="4" && this.my4_2=="4" && this.my4_3=="4" && this.my4_4=="4" && this.my4_5=="5" && this.my4_6=="4" && this.my4_7=="4")
      {
            this.game=true;          
      }
       if(this.my5_1=="5" && this.my5_2=="5" && this.my5_3=="5" && this.my5_4=="5" && this.my5_5=="5" && this.my5_6=="5")
      {
            this.game=true;          
      }
       if(this.my6_1=="6" && this.my6_2=="6" && this.my6_3=="6" && this.my6_4=="6")
      {
            this.game=true;
      }
       if(this.my7_1=="7" && this.my7_2=="7" && this.my7_3=="7" && this.my7_4=="7" && this.my7_5=="7" && this.my7_6=="7")
      {
            this.game=true;         
      }
       if(this.my8_1=="8" && this.my8_2=="8" && this.my8_3=="8" && this.my8_4=="8")
      {
            this.game=true;
          
      }
       if(this.my9_1=="9" && this.my9_2=="9" && this.my9_3=="9" && this.my9_4=="9" && this.my9_5=="9")
      {
            this.game=true;          
      }
  }   
  myCheckWinner()
  {
      if(this.game==true)
      {
        alert("You win");
            
      }
      else
      {
        alert("Try again");
      }
  }
  myReset()
  {
    this.game=false;
    this.my1_1="";
    this.my1_2="";
    this.my1_3="";
    this.my1_4="";
    this.my1_5="";
    this.my1_6="";
    this.my2_1="";
    this.my2_2="";
    this.my2_3="";
    this.my2_4="";
    this.my2_5="";
    this.my2_6="";
    this.my2_7="";
    this.my3_1="";
    this.my3_2="";
    this.my3_3="";
    this.my3_4="";
    this.my3_5="";
    this.my3_6="";
    this.my4_1="";
    this.my4_2="";
    this.my4_3="";
    this.my4_4="";
    this.my4_5="";
    this.my4_6="";
    this.my4_7="";
    this.my5_1="";
    this.my5_2="";
    this.my5_3="";
    this.my5_4="";
    this.my5_5="";
    this.my5_6="";
    this.my6_1="";
    this.my6_2="";
    this.my6_3="";
    this.my6_4="";
    this.my7_1="";
    this.my7_2="";
    this.my7_3="";
    this.my7_4="";
    this.my7_5="";
    this.my7_6="";
    this.my8_1="";
    this.my8_2="";
    this.my8_3="";
    this.my8_4="";
    this.my9_1="";
    this.my9_2="";
    this.my9_3="";
    this.my9_4="";
    this.my9_5="";      
  }
}

