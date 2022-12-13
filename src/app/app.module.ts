import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {NgxMapboxGLModule} from "ngx-mapbox-gl";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      NgxMapboxGLModule.withConfig({
        accessToken:'pk.eyJ1IjoidGhvbWVnYSIsImEiOiJjbGJjZmVtcGgwM3FlM29xdTdqdTNzcGVoIn0.5H6TAGMFFAu-9maHaoW-BA'
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
