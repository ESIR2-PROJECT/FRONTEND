import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, Coordonnees} from "../objects/borne";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  name:String = "Map";
  borne:Borne[]=[];

  @Output() showInfo =new EventEmitter<Borne>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }
  ngOnInit(): void {
    //var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    //this.borne=this.dataservice.getAllBornes();
    this.dataservice.getAllBorne().then( (bornes:Borne[])=>{
      this.borne=bornes;
      console.log(bornes)
    });
  }
  giveInfo(borne:Borne){
    this.showInfo.emit(borne);
    this.sideNavService.show(borne);
  }
  changeData(d: Date){
    //this.borne = this.dataservice.getBornesUntil(d)
    this.dataservice.getBorneUntil(d).then( (bornes:Borne[])=>{
      this.borne=bornes;
      console.log(bornes)
    });
  }

}


