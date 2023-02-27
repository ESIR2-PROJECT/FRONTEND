import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {MapMouseEvent} from "mapbox-gl";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  name:String = "Map";
  borne:BornePoint[]=[];

  @Output() showInfo =new EventEmitter<BornePoint>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()
  timer = setTimeout(() => {
    this.getData(this.begin);
  }, 100);

  center: [number, number] | undefined;

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }

  ngOnInit() {
    this.getCurrentLocation();
  }

  giveInfo(borne:BornePoint){
    this.showInfo.emit(borne);
    this.sideNavService.show(borne);
  }

  centerMapTo(evt: MapMouseEvent) {
    this.center = (evt as any).features[0].geometry.coordinates;
  }

  changeData(d: Date){
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.getData(d);
    }, 100);
    //this.borne = this.dataservice.getBornesUntil(d)
    //this.dataservice.getBorneUntil(d).then( (bornes:BornePoint[])=>{
  }

  getData(d: Date) {
    // Déclenche la requête HTTP avec la valeur courante du slider
    this.dataservice.getBorneUntil(d).then( (bornes:BornePoint[])=>{
      this.borne=bornes;
      // console.log(bornes)
    });
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.center = [longitude, latitude];
      });
    }
  }

}


