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

@Component({
  selector: 'app-side-description',
  templateUrl: './side-description.component.html',
  styleUrls: ['./side-description.component.css']
})
export class SideDescriptionComponent implements OnInit{
  @ViewChild("drawer", {static: true}) sideNav!: MatDrawer;

  constructor(public sideNavService: SideNavService) {
  }

  ngOnInit(): void {
    this.sideNavService.setDrawer(this.sideNav);
  }

}
