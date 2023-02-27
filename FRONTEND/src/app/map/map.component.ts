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
  borne:Borne[]=[];

  @Output() showInfo =new EventEmitter<Borne>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()
  timer = setTimeout(() => {
    this.getData(this.begin);
  }, 100);

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }
  giveInfo(borne:Borne){
    this.showInfo.emit(borne);
    this.sideNavService.show(borne);
  }
  changeData(d: Date){
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.getData(d);
    }, 100);
    //this.borne = this.dataservice.getBornesUntil(d)
  }

  getData(d: Date) {
    // Déclenche la requête HTTP avec la valeur courante du slider
    this.dataservice.getBorneUntil(d).then( (bornes:Borne[])=>{
      this.borne=bornes;
      console.log(bornes)
    });
  }

}


