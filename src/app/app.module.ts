import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';

import{ MatTooltipModule } from '@angular/material/tooltip';
import { CountdownModule } from 'ngx-countdown';
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
import { MinesweeperComponent } from './games/minesweeper/minesweeper.component';
import { TictactoeComponent } from './games/tictactoe/tictactoe.component';
import { SudokuComponent } from './games/sudoku/sudoku.component';
import { BugformComponent } from './settings/bugform/bugform.component';
import { FormsModule } from '@angular/forms';


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
    MinesweeperComponent,
    TictactoeComponent,
    SudokuComponent,
    BugformComponent,
   

   
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    CountdownModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
