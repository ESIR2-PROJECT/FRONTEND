import { Injectable } from '@angular/core';
import { Borne, Coordonnees, Horaire, Station, Ville } from '../objects/borne';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }


  getAllBornes(): Borne[] {
    let bornes: Borne[] = []

    // Borne 1
    let nom_enseigne1 = "ELECTRA"
    let nom_station1 = "Saint-Barthélémy d'Anjou"
    let adresse_station1 = "8 rue de Champfleur 49124 Saint-Barthélemy-d'Anjou"
    let type_prise1 = "TODO"
    let debut1 = new Date("2021-12-13T05:05:04.977000")
    let fin1 = new Date("2021-12-13T05:05:04.977000")
    let date_mise_en_service1 = new Date("2021-12-13T05:05:04.977000")
    let longitude1 = -0.502617
    let latitude1 = 47.481716
    let commune1 = "Beaune"
    let code_postal1 = "49124"

    let station1 = new Station(nom_station1, adresse_station1)
    let horaire1 = new Horaire(debut1, fin1)
    let coordonnees1 = new Coordonnees(longitude1, latitude1)
    let ville1 = new Ville(commune1, code_postal1)

    bornes.push(new Borne(nom_enseigne1, station1, type_prise1, [horaire1], date_mise_en_service1, coordonnees1, ville1))


    // Borne 2
    let nom_enseigne2 = "ELECTRA"
    let nom_station2 = "Beaune - Greet Hotel"
    let adresse_station2 = "58 route de Verdun 21200 Beaune"
    let type_prise2 = "TODO"
    let debut2 = new Date("2021-12-13T05:05:04.977000")
    let fin2 = new Date("2021-12-13T05:05:04.977000")
    let date_mise_en_service2 = new Date("2022-03-30T05:05:04.977000")
    let longitude2 = 4.851826
    let latitude2 = 47.009538
    let commune2 = "Beaune"
    let code_postal2 = "21200"

    let station2 = new Station(nom_station2, adresse_station2)
    let horaire2 = new Horaire(debut2, fin2)
    let coordonnees2 = new Coordonnees(longitude2, latitude2)
    let ville2 = new Ville(commune2, code_postal2)

    bornes.push(new Borne(nom_enseigne2, station2, type_prise2, [horaire2], date_mise_en_service2, coordonnees2, ville2))

    // Borne 3
    let nom_enseigne3 = "ELECTRA"
    let nom_station3 = "Bordeaux - Novotel Bordeaux Lac"
    let adresse_station3 = "rue Jean Samazeuilh 33300 Bordeaux"
    let type_prise3 = "TODO"
    let debut3 = new Date("2021-12-13T05:05:04.977000")
    let fin3 = new Date("2021-12-13T05:05:04.977000")
    let date_mise_en_service3 = new Date("2022-06-22T05:05:04.977000")
    let longitude3 = -0.567111
    let latitude3 = 44.890889
    let commune3 = "Bordeaux"
    let code_postal3 = "33300"

    let station3 = new Station(nom_station3, adresse_station3)
    let horaire3 = new Horaire(debut3, fin3)
    let coordonnees3 = new Coordonnees(longitude3, latitude3)
    let ville3 = new Ville(commune3, code_postal3)

    bornes.push(new Borne(nom_enseigne3, station3, type_prise3, [horaire3], date_mise_en_service3, coordonnees3, ville3))

    return bornes
  }


  getBornesUntil(date: Date): Borne[] {
    let bornes = this.getAllBornes()
    return bornes.filter(borne => borne.miseEnService <= date)
  }
}
