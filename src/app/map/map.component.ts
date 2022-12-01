import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  name:String = "Map";
  
  constructor() { 
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWVnYSIsImEiOiJjbGIzdGhjajEwMXAwM3hvYXBwbXV6OGhjIn0.Nxv79pbhDkStQMHDOi857A';
    var map = new mapboxgl.Map({
      container: 'YOUR_CONTAINER_ELEMENT_ID',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }


}
