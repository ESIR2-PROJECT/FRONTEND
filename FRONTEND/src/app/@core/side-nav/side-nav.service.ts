import {EventEmitter, Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Borne, BornePoint, Coordonnees} from "../../objects/borne";
import {DataService} from "../../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  drawer!: MatDrawer;
  borne?: number
  changed: EventEmitter<number> = new EventEmitter<number>()
  constructor(
    private dataService: DataService
  ) { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle() {
    this.drawer.toggle();
  }

  show(borne: number) {
    this.drawer.open()
    this.borne = borne
    this.changed.emit(this.borne)
  }
  close(){
    this.drawer.close()
  }
  getBorne(): number|undefined {
    return this.borne;
  }
  getEvent(): EventEmitter<number> {
    return this.changed
  }
}
