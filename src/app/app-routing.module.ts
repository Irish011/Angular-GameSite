import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
  path:'home',
  component:HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
