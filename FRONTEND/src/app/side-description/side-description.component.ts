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

  event!: EventEmitter<BornePoint>
  borne?: Borne

  constructor(public sideNavService: SideNavService,private dataservice : DataService) {
  }

  ngOnInit(): void {
    this.sideNavService.setDrawer(this.sideNav);
    this.event = this.sideNavService.getEvent()

    this.event.subscribe((e: BornePoint)=>{
      //this.borne = e
      this.dataservice.getBorneID(e.id).then((borne:Borne)=>{
        console.log(borne)
        this.borne=borne
      })

    })
  }

}
