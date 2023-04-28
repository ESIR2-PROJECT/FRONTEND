import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne, BornePoint, Coordonnees} from "../../objects/borne";
import {DataService} from "../../services/data.service";

export interface IVille {
  dept: string
  postalCode: string
}

@Injectable({
  providedIn: 'root'
})

export class SideNavService {

  descDrawer!: MatDrawer;
  vehicleDrawer!: MatDrawer;
  borne?: number
  descChanged: EventEmitter<number> = new EventEmitter<number>()
  deptChanged: EventEmitter<IVille> = new EventEmitter<IVille>()
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
    this.vehicleDrawer.close();
    this.descDrawer.open()
    this.borne = borne
    this.descChanged.emit(this.borne)
  }

  showVehicle(ville: IVille) {
    this.descDrawer.close();
    this.vehicleDrawer.open()
    this.deptChanged.emit(ville)
  }

  getDescEvent(): EventEmitter<number> {
    return this.descChanged;
  }
  getDeptEvent(): EventEmitter<IVille> {
    return this.deptChanged;
  }
}
