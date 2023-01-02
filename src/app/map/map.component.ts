import {AfterViewInit, Component} from '@angular/core';
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

  }

}


