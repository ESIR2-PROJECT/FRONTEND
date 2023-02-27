import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {EventData, MapboxEvent, MapMouseEvent, MapSourceDataEvent, Point, Map, GeoJSONSource} from "mapbox-gl";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  name:String = "Map";
  borne:BornePoint[]=[];
  loadingMap: boolean = false
  loadingQuery: boolean = false
  error: string|null = null

  mapbox: Map|null = null
  geojson: GeoJSONSource = new GeoJSONSource()

  @Output() showInfo =new EventEmitter<number>();

  begin: Date = new Date("1999-01-01")
  end: Date = new Date()

  center: [number, number] | undefined;

  targetDate: Date = this.begin

  constructor(public sideNavService: SideNavService,
              private dataservice : DataService) {
  }

  ngOnInit() {
    this.getCurrentLocation();
    this.mapbox?.addSource("symbols-source", this.geojson)
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

  async changeData(d: Date) {
    this.targetDate = d

    if (this.loadingQuery)
      return

    this.loadingQuery = true
    this.loadingMap = true
    this.borne = []
    await this.dataservice.getBorneUntil(d).then((bornes: BornePoint[]) => {
      let json = bornes.map(b => {
        return {
          id: b.id,
          geometry: {
            type: "Point",
            coordinates: [b.latitude, b.longitude]
          },
          properties: {
            id: b.id,
            point: b
          }
        }
      })
      this.geojson.setData(json)
    }).catch((e: Error) => {
      this.loadingQuery = false
      this.error = e.message
    })
    this.loadingMap = false
    setTimeout(() => {
      this.loadingQuery = false
      if(this.targetDate != d)
        this.changeData(this.targetDate)
    }, 1000)
  }
  async updateDate(){

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


