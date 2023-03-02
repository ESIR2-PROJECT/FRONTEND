import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {EventData, MapboxEvent, MapMouseEvent, MapSourceDataEvent, Point, Map, GeoJSONSource} from "mapbox-gl";
import {HttpErrorResponse} from "@angular/common/http";
import * as GeoJSON from 'geojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  name:String = "Map";
  borne:BornePoint[]=[];
  loadingMap: boolean = false
  error: string|null = null

  mapbox!: Map
  @Output() showInfo =new EventEmitter<number>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()

  center: [number, number] | undefined;

  targetDate: Date = this.begin

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }

  mapInit(e: Map){
    this.mapbox = e
    this.getAll()
  }
  ngOnInit(){
    this.getCurrentLocation();
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
    await this.dataservice.getBornes().then((bornes: BornePoint[]) => {
      this.borne = bornes
      this.changeData(this.targetDate)
    }).catch((e: Error) => {
      this.error = e.message
    })
    this.loadingMap = false
  }

  async changeData(d: Date) {
    this.targetDate = d

    let bornes = this.borne.filter(b => b.date < this.targetDate)

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
          point: b
        }
      }
      return feature
    })
    let collection: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: features
    }
    let source = this.mapbox.getSource("symbols-source") as GeoJSONSource
    console.log(source)
    source.setData(collection)
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


