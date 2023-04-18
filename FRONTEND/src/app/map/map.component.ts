import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {EventData, MapboxEvent, MapMouseEvent, MapSourceDataEvent, Point, Map, GeoJSONSource} from "mapbox-gl";
import {HttpErrorResponse} from "@angular/common/http";
import * as GeoJSON from 'geojson';
import {MapSettingsService} from "../map-settings/map-settings.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy{

  name:String = "Map";
  borne:BornePoint[]=[];
  borneNull:BornePoint[]=[];
  loadingMap: boolean = false
  error: string|null = null

  mapbox!: Map
  @Output() showInfo =new EventEmitter<number>();

  begin: Date = new Date("2013-01-01")
  end: Date = new Date()

  center: [number, number] | undefined;

  targetDate: Date = this.end

  clusterSubscription!: Subscription;
  clusterEnabled: boolean = true;

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService,
              private settingService: MapSettingsService) {
  }

  mapInit(e: Map){
    this.mapbox = e
    this.getAll()
  }
  ngOnInit(){
    this.clusterSubscription = this.settingService.clustering.subscribe((value: boolean) => {
      this.clusterEnabled = value;
      setTimeout(() => {
        this.changeData(this.targetDate);
      }, 100);
    });
    this.getCurrentLocation();
  }

  ngOnDestroy() {
    this.clusterSubscription.unsubscribe();
  }

  giveInfo(e: MapMouseEvent){
    const features = e.target.queryRenderedFeatures(e.point, {
      layers: ['unclustered-point'] // replace with your layer name
    });
    if(features.length === 0)
      return
    let borne: number = features[0].properties!['id']
    this.showInfo.emit(borne);
    this.sideNavService.show(borne);
  }

  centerMapTo(evt: MapMouseEvent) {
    this.center = (evt as any).features[0].geometry.coordinates;
  }
  async getAll(){
    this.loadingMap = true
    this.borne = []
    await this.dataservice.getBornes().then(async (bornes: BornePoint[]) => {
      this.borne = bornes
      await this.changeData(this.targetDate)
    }).catch((e: Error) => {
      this.error = e.message
    })
    this.loadingMap = false
  }

  changeData(d: Date) {
    this.targetDate = d

    let bornes = this.borne.filter(b => b.date == null || b.date < this.targetDate)
    let features = bornes.map((b, i) => {
      let feature: GeoJSON.Feature  = {
        id: i,
        type: 'Feature',
        geometry: {
          type: "Point",
          coordinates: [b.longitude, b.latitude]
        },
        properties: {
          id: b.id,
          point: b,
          date: b.date?.toLocaleDateString("fr-FR"),
          color: (b.date == null) ? "#ff0000" : "#00aeff",
        }
      }
      return feature
    })
    let collection: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: features
    }
    let source = this.mapbox.getSource("symbols-source") as GeoJSONSource
    source.setData(collection)
    console.log("changeData")
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.center = [longitude, latitude];
      });
    }
  }

}


