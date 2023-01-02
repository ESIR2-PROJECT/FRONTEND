import {AfterViewInit, Component} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
  name:String = "Map";

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()

  constructor(public sideNavService: SideNavService) {
  }

  ngAfterViewInit(): void {

  }

}


