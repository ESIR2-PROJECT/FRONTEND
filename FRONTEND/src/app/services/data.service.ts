import { Injectable } from '@angular/core';
import {Borne, BornePoint, Coordonnees, Station, Ville} from '../objects/borne';
import {ApiHelperService} from "./api-helper.service";
import {VoiturePoint} from "../objects/voitures";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private voiturePointsCache: VoiturePoint[] | null = null;
  constructor(private api: ApiHelperService) { }

   getBorneUntil(date : Date):Promise<BornePoint[]>{
    return this.api.get({endpoint:'/bornes',queryParams:{date:date}}).then(data => {
      return data.map(this.arrayToBornePoint)
    })
  }

  getBorneID(id : number):Promise<Borne>{
    return this.api.get({endpoint:'/bornes/'+id}).then(data => {
      return data
    })
  }
  getBornes(): Promise<BornePoint[]>{
    return this.api.get({endpoint: '/bornes'}).then(data => {
      return data.map(this.arrayToBornePoint)
    })
  }
  getAllDepartments(): Promise<VoiturePoint[]> {
    if (this.voiturePointsCache) {
      return Promise.resolve(this.voiturePointsCache);
    }
    return this.api.get({endpoint: '/voitures/departments'}).then(data => {
      this.voiturePointsCache =  data.map((array: string[]) => {
        return new VoiturePoint(array[0], +array[1], +array[2], +array[3])
      })
      return this.voiturePointsCache!;
    })
  }

  private arrayToBornePoint(array: string[]): BornePoint {
    let date = (array[3] == "null") ? null : new Date(array[3])
    return new BornePoint(+array[0], +array[1], +array[2], date)
  }
}
