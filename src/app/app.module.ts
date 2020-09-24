import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule } from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog'
import { OverviewComponent } from './overview/overview.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SignUpComponent } from './events/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,   
    OverviewComponent,
    EventsComponent,
    AboutComponent,
    GamesComponent,
    ContactComponent,
    SettingsComponent,
    ConfirmComponent,
    SignUpComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
