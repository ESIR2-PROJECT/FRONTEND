import { Injectable } from '@angular/core';
import { Borne, Coordonnees, Station, Ville } from '../objects/borne';
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

      let horaires=b.horaires

      let coords = new Coordonnees(b.consolidated_longitude, b.consolidated_latitude)
      let ville = new Ville(b.consolidated_commune, b.code_insee_commune.toString())

      let typeprise: String[] = [];
      if(b.prise_type_ef == true){
        typeprise.push(" E/F");
      }
      if(b.prise_type_chademo == true){
        typeprise.push(" CHAdeMO");
      }
      if(b.prise_type_combo_ccs == true){
        typeprise.push(" Combo CCS")
      }
      if(b.prise_type_2 == true){
        typeprise.push(" Type 2")
      }
      if(b.prise_type_autre == true){
        typeprise.push(" Autre")
      }

      bornes.push(
        new Borne(b.nom_enseigne, station, typeprise, horaires, new Date(b.date_mise_en_service), coords, ville)
      )
    }

    return bornes
  }


  getBornesUntil(date: Date): Borne[] {
    let bornes = this.getAllBornes()
    return bornes.filter(borne => borne.miseEnService <= date)
  }
}
