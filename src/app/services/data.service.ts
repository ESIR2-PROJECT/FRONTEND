import { Injectable } from '@angular/core';
import { Borne, Coordonnees, Horaire, Station, Ville } from '../objects/borne';
import * as data from "./data.data"

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }


  getAllBornes(): Borne[] {
    let bornes: Borne[] = []

    for(let b of data.bornes){
      let station = new Station(b.nom_station, b.adresse_station)

      let horaires: Horaire[] = []
      horaires = [
        new Horaire(new Date("2020-01-01 0:00:00"), new Date("2020-01-01 23:59:59"))
      ]

      let coords = new Coordonnees(b.consolidated_longitude, b.consolidated_latitude)
      let ville = new Ville(b.consolidated_commune, b.code_insee_commune.toString())

      bornes.push(
        new Borne(b.nom_enseigne, station, "Toutes", horaires, new Date(b.date_mise_en_service), coords, ville)
      )
    }

    return bornes
  }


  getBornesUntil(date: Date): Borne[] {
    let bornes = this.getAllBornes()
    return bornes.filter(borne => borne.miseEnService <= date)
  }
}
