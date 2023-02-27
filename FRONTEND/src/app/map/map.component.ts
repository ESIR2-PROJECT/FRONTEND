import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, Coordonnees} from "../objects/borne";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{

  name:String = "Map";
  borne:Coordonnees[]=[];

  @Output() showInfo =new EventEmitter<Coordonnees>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }
  giveInfo(borne:Coordonnees){
    this.showInfo.emit(borne);
    this.sideNavService.show(borne);
  }
  changeData(d: Date){
    //this.borne = this.dataservice.getBornesUntil(d)
    this.dataservice.getBorneUntil(d).then( (bornes:Coordonnees[])=>{
      this.borne=bornes;
      console.log(bornes)
    });
  }

}


