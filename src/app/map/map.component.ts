import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../services/data.service";
import {Borne, Coordonnees} from "../objects/borne";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Output() showInfo =new EventEmitter<Borne>();

  name:string = "mapbox://styles/mapbox/streets-v11";
  borne:Borne[]=[];

  constructor(private dataservice : DataService) { }
  ngOnInit(): void {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    this.borne=this.dataservice.getAllBornes();
  }
  giveInfo(borne:Borne){
    this.showInfo.emit(borne);
  }

}


