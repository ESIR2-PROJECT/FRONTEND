import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne, BornePoint, Coordonnees} from "../../objects/borne";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  drawer!: MatDrawer;
  borne?: BornePoint
  changed: EventEmitter<BornePoint> = new EventEmitter<BornePoint>()
  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle() {
    this.drawer.toggle();
  }

  show(borne: BornePoint) {
    this.drawer.open()
    this.borne = borne
    this.changed.emit(borne)
  }
  close(){
    this.drawer.close()
  }
  getBorne(): BornePoint|undefined {
    return this.borne;
  }
  getEvent(): EventEmitter<BornePoint> {
    return this.changed
  }
}
