import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/events/sign-up/_helpers/must-match.validator';

@Component({
  selector: 'app-bugform',
  templateUrl: './bugform.component.html',
  styleUrls: ['./bugform.component.css']
})
export class BugformComponent implements OnInit {
  bugForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bugForm = this.formBuilder.group({
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Description: ['', Validators.required]
    });
  }

  get f(){
    return this.bugForm.controls;
  }

  OnSubmit(){
    this.submitted = true;

    if(this.bugForm.invalid){
      console.log("Error is there");
      return;
    }

    alert("Your Report has been submitted!");
    this.resetall();
  }

  resetall(){
        this.submitted = false;
        this.bugForm.reset();
  }

}
