import { Injectable } from '@angular/core';
import {ApiHelperService} from "./api-helper.service";

export class VoiturePoint{
  constructor(
    public departement: string,
    public total: number,
    public elec: number,
    public gaz: number
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private api: ApiHelperService) { }

  getAllDepartments(): Promise<VoiturePoint[]> {
    return this.api.get({endpoint: '/voitures/departments'}).then(data => {
      return data.map((array: string[]) => {
        return new VoiturePoint(array[0], +array[1], +array[2], +array[3])
      })
    })
  }
}
