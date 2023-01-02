import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne} from "../../objects/borne";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  drawer!: MatDrawer;
  borne?: Borne
  changed: EventEmitter<Borne> = new EventEmitter<Borne>()
  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle() {
    this.drawer.toggle();
  }

  show(borne: Borne) {
    this.drawer.open()
    this.borne = borne
    this.changed.emit(borne)
  }
  close(){
    this.drawer.close()
  }
  getBorne(): Borne|undefined {
    return this.borne;
  }
  getEvent(): EventEmitter<Borne> {
    return this.changed
  }
}
