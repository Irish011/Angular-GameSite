import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game1:string="assets/images/tactac.gif";
  game2:string="assets/images/mine.gif";
  game3:string="assets/images/sudoku.gif";
  game4:string="assets/images/ko.gif";
  constructor() { }

  ngOnInit(): void {
  }
}
