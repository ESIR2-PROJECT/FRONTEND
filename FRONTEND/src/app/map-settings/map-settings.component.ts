import { Component, OnInit } from '@angular/core';
import {SettingsDialogComponent} from "./settings-dialog/settings-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrls: ['./map-settings.component.scss']
})
export class MapSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettings() {
    this.dialog.open(SettingsDialogComponent);
  }
}
