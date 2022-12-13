import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {SideNavService} from "../@core/side-nav/side-nav.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
  name:String = "Map";
  constructor(public sideNavService: SideNavService) {
  }

  ngAfterViewInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWVnYSIsImEiOiJjbGJjZmVtcGgwM3FlM29xdTdqdTNzcGVoIn0.5H6TAGMFFAu-9maHaoW-BA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        innerWidth: 1500,
    });
  }

}


