import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { HttpService } from '../../http.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({ 
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
 })
export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    //nameFormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);
    //emailFormControl = new FormControl("",[Validators.required, Validators.email]);

    constructor(private formBuilder: FormBuilder, /*public http: HttpService*/) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            //country: ['', Validators.required],
            username: ['', Validators.required],
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            confirmemail: ['',[Validators.required, Validators.email]],
            number: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
            games: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('email', 'confirmemail')
        });
    }


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("Error is there");
            return;
        }
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        alert('We have sent you a mail regarding the details. ');
        this.onReset();
        // + JSON.stringify(this.f.Name.value, null ,4)
        //console.log(`Good ${this.f.Name}`);
        
    }
    /*let user={
            name: this.nameFormControl.value,
            email: this.emailFormControl.value
        }

        this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
            data=>{
                let res:any = data;
                console.log(`Congrats! ${user.name} is successfully registered `);
            },
                err => {
                    console.log(err);
                    this.submitted = false;
                },
                ()=> {
                    this.submitted = false;
                }
        );
        */

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
