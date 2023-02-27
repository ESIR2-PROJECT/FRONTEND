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

   getBorneUntil(date : Date):Promise<Coordonnees[]>{
    return this.api.get({endpoint:'/bornes',queryParams:{date:date}}).then(data => {
      console.log(data)
      let bornes:Coordonnees[]=[]
      for(let i=0;i<10;i++){
        bornes.push(data.bornes[i])
      }
      //return data.bornes
      return bornes
    })
  }

  getBorneID(id : number):Promise<Borne>{
    return this.api.get({endpoint:'/bornes',queryParams:{id:id}}).then(data => {
      return data.bornes
    })
  }
}
