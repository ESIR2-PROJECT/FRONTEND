import {Component, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from "./@core/side-nav/side-nav.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FRONTEND';
  @ViewChild('drawer', {static: true}) public drawer!: MatDrawer;
  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
    this.sideNavService.setDrawer(this.drawer);
  }
}
