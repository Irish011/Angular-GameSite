import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../shared/user.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

Name = new FormControl('');

user:User;
constructor(){}

ngOnInit(){

}

}
