import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {SideNavService} from "../@core/side-nav/side-nav.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-side-description',
  templateUrl: './side-description.component.html',
  styleUrls: ['./side-description.component.css']
})
export class SideDescriptionComponent implements OnInit{
  @ViewChild("drawer", {static: true}) sideNav!: MatDrawer;

  event!: EventEmitter<number>
  borne?: Borne

  constructor(public sideNavService: SideNavService,private dataservice : DataService) {
  }

  ngOnInit(): void {
    this.sideNavService.setDescDrawer(this.sideNav);
    this.event = this.sideNavService.getDescEvent()

    this.event.subscribe((e: number)=>{
      //this.borne = e
      this.dataservice.getBorneID(e).then((borne:Borne)=>{
        this.borne=borne
      })

    })
  }

}
