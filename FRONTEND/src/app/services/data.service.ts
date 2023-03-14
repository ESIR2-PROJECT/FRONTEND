import { Injectable } from '@angular/core';
import {Borne, BornePoint, Coordonnees, Station, Ville} from '../objects/borne';
import {ApiHelperService} from "./api-helper.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

  getBorneNull():Promise<BornePoint[]>{
    return this.api.get({endpoint:'/bornes/bornenull'}).then(data => {
      return data.map(this.arrayToBornePoint)
    })
  }
  getBornes(): Promise<BornePoint[]>{
    return this.api.get({endpoint: '/bornes'}).then(data => {
      return data.map(this.arrayToBornePoint)
    })
  }

  private arrayToBornePoint(array: string[]): BornePoint {
    return new BornePoint(+array[0], +array[1], +array[2], new Date(array[3]))
  }
}
