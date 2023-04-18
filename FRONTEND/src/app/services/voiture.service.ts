import { Injectable } from '@angular/core';
import {ApiHelperService} from "./api-helper.service";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private api: ApiHelperService) { }

  getAllDepartments(): Promise<any> {
    return this.api.get({endpoint: '/voitures/departments'}).then(data => {
      return data
    })
  }
}
