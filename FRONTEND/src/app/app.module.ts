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
import { MapSettingsComponent } from './map-settings/map-settings.component';
import { SettingsDialogComponent } from './map-settings/settings-dialog/settings-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { PresentationComponent } from './presentation/presentation.component';
import { DeptVehicleComponent } from './side-description/dept-vehicle/dept-vehicle.component';
@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        NavComponent,
        SideDescriptionComponent,
        HomeComponent,
        TimelineComponent,
        ChartsComponent,
        PresentationComponent,
        MapSettingsComponent,
        SettingsDialogComponent,
        DeptVehicleComponent,
        DeptVehicleComponent,
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
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
