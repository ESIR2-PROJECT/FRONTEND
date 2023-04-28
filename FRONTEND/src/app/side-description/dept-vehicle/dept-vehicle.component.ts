import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {IVille, SideNavService} from "../../@core/side-nav/side-nav.service";
import {Borne} from "../../objects/borne";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-dept-vehicle',
  templateUrl: './dept-vehicle.component.html',
  styleUrls: ['./dept-vehicle.component.scss']
})
export class DeptVehicleComponent implements OnInit {
  @ViewChild("drawer", {static: true}) sideNav!: MatDrawer;
  event!: EventEmitter<IVille>
  ville?: IVille
  elec?: number;
  gaz?: number;
  total?: number;
  constructor(public sideNavService: SideNavService, private dataService: DataService) { }

  ngOnInit(): void {
    this.sideNavService.setVehicleDrawer(this.sideNav);
    this.event = this.sideNavService.getDeptEvent()
    this.event.subscribe(async (ville: IVille) => {
      const voiturePoints = await this.dataService.getAllDepartments();
      const voiturePoint = voiturePoints.find((voiturePoint) => voiturePoint.departement === ville.postalCode);
      this.ville = ville;
      this.elec = voiturePoint?.elec;
      this.gaz = voiturePoint?.gaz;
      this.total = voiturePoint?.total;
    })
  }

}
