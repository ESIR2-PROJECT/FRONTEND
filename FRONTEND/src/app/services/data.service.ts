import { Injectable } from '@angular/core';
import { Borne, Coordonnees, Station, Ville } from '../objects/borne';
import {ApiHelperService} from "./api-helper.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private api: ApiHelperService) { }

   getAllBorne():Promise<Borne[]>{
    return this.api.get({endpoint:'/bornes'}).then(data => {

      data.bornes.forEach((e: Borne) => {
        e.miseEnService = new Date(e.miseEnService)
      })

      return data.bornes
    });
  }

   getBorneUntil(date : Date):Promise<Borne[]>{
    return this.api.get({endpoint:'/bornes',queryParams:{date:date}}).then(data => {
      return data.bornes
    })
  }
}
