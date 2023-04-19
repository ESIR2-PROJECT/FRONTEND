import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {SideNavService} from "../../@core/side-nav/side-nav.service";
import {Borne} from "../../objects/borne";

@Component({
  selector: 'app-dept-vehicle',
  templateUrl: './dept-vehicle.component.html',
  styleUrls: ['./dept-vehicle.component.scss']
})
export class DeptVehicleComponent implements OnInit {
  @ViewChild("drawer", {static: true}) sideNav!: MatDrawer;
  event!: EventEmitter<string>

  constructor(public sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.sideNavService.setVehicleDrawer(this.sideNav);
    this.event = this.sideNavService.getDeptEvent()
    this.event.subscribe((e: number)=>{
      console.log(e)

    })
  }

}
