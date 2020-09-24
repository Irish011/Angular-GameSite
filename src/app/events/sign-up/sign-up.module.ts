import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        SignUpComponent
    ],
    bootstrap: [SignUpComponent]
})
export class AppModule { }