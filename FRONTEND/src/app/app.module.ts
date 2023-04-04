import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { SideDescriptionComponent } from './side-description/side-description.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgxMapboxGLModule} from "ngx-mapbox-gl";
import {HttpClientModule} from "@angular/common/http";
import { TimelineComponent } from './timeline/timeline.component';
import {FormsModule} from "@angular/forms";
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavComponent,
    SideDescriptionComponent,
    HomeComponent,
    TimelineComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    NgChartsModule,
    MatIconModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidGhvbWVnYSIsImEiOiJjbGJjZmVtcGgwM3FlM29xdTdqdTNzcGVoIn0.5H6TAGMFFAu-9maHaoW-BA',
    }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
