import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne, Coordonnees} from "../../objects/borne";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  drawer!: MatDrawer;
  borne?: Coordonnees
  changed: EventEmitter<Coordonnees> = new EventEmitter<Coordonnees>()
  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle() {
    this.drawer.toggle();
  }

  show(borne: Coordonnees) {
    this.drawer.open()
    this.borne = borne
    this.changed.emit(borne)
  }
  close(){
    this.drawer.close()
  }
  getBorne(): Coordonnees|undefined {
    return this.borne;
  }
  getEvent(): EventEmitter<Coordonnees> {
    return this.changed
  }
}
