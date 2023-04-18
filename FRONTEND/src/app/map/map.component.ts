import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {SideNavService} from "../@core/side-nav/side-nav.service";

import {DataService} from "../services/data.service";
import {Borne, BornePoint, Coordonnees} from "../objects/borne";
import {EventData, MapboxEvent, MapMouseEvent, MapSourceDataEvent, Point, Map, GeoJSONSource} from "mapbox-gl";
import {HttpErrorResponse} from "@angular/common/http";
import * as GeoJSON from 'geojson';
import {MapSettingsService} from "../map-settings/map-settings.service";
import {Subscription} from "rxjs";
import {VoitureService} from "../services/voiture.service";

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
              private voitureService: VoitureService,
              private settingService: MapSettingsService) {
  }

  mapInit(e: Map){
    this.mapbox = e
    this.getAll()
    this.mapbox.addSource("city-source", {
      type: "geojson",
      // data: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/communes-version-simplifiee.geojson",
      data: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson"
    });
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

  async computeCityColor() {
    const colorExpression = [
      'match',
      ['get', 'code']
    ];
    const deptDatas = await this.voitureService.getAllDepartments();
    for (const deptData of deptDatas) {
      const dept = deptData[0];
      const total = +deptData[1];
      const elec = +deptData[2];
      const gaz = +deptData[3];
      const essence = total - elec - gaz;
      const ratio = essence / total;
      const colorRange = [
        'interpolate',
        ['linear'],
        ratio, // la propriété "valeur" doit être définie pour chaque géométrie
        0, 'green',
        0.7, 'purple',
        1, 'red'
      ];
      colorExpression.push([dept, colorRange]);
    }
    colorExpression.push('white');
    return colorExpression;
  }

  async addCitySource(): Promise<void> {
    const colorExpression = await this.computeCityColor();
    this.mapbox.setPaintProperty('ville-layer', 'fill-color', colorExpression);

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
      this.addCitySource()
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


