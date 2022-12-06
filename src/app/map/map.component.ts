import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  name:String = "Map";
  
  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWVnYSIsImEiOiJjbGJjZmVtcGgwM3FlM29xdTdqdTNzcGVoIn0.5H6TAGMFFAu-9maHaoW-BA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      innerWidth: 1500,
    });

  }


}


