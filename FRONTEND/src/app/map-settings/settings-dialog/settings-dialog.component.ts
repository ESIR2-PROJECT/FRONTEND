import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MapSettingsService} from "../map-settings.service";

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  clusteringEnabled: boolean = false;

  constructor(private ref: MatDialogRef<any>, private settingService: MapSettingsService) { }

  ngOnInit(): void {
    this.clusteringEnabled = this.settingService.clusteringEnabled;
  }

  toggleClustering(event: any): void {
    this.clusteringEnabled = event.checked;
  }

  onConfirm() {
    this.settingService.clusteringEnabled = this.clusteringEnabled;
    this.ref.close();
  }
}
