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
      return data.map((e: number[]) => new BornePoint(e[0], e[1], e[2]))
    })
  }

  getBorneID(id : number):Promise<Borne>{
    return this.api.get({endpoint:'/bornes/'+id}).then(data => {
      return data
    })
  }
}
