import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne, BornePoint, Coordonnees} from "../../objects/borne";
import {DataService} from "../../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  descDrawer!: MatDrawer;
  vehicleDrawer!: MatDrawer;
  borne?: number
  descChanged: EventEmitter<number> = new EventEmitter<number>()
  deptChanged: EventEmitter<string> = new EventEmitter<string>()
  constructor(
    private dataService: DataService
  ) { }

  setDescDrawer(drawer: MatDrawer) {
    this.descDrawer = drawer;
  }
  setVehicleDrawer(drawer: MatDrawer) {
    this.vehicleDrawer = drawer;
  }

  showDesc(borne: number) {
    this.descDrawer.open()
    this.borne = borne
    this.descChanged.emit(this.borne)
  }
  showVehicle(dept: string) {
    this.vehicleDrawer.open()
    this.deptChanged.emit(dept)
  }

  getDescEvent(): EventEmitter<number> {
    return this.descChanged;
  }
  getDeptEvent(): EventEmitter<string> {
    return this.deptChanged;
  }
}
