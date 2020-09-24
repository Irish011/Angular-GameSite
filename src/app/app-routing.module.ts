import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {
    path:'games',
    component:GamesComponent
  },
  {
    path:'overview',
    component:OverviewComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
