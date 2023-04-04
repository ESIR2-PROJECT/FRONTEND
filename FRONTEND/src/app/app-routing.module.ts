import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: '/map',
  },
  { path: 'map', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
