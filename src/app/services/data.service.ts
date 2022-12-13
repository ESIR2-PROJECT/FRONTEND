import { Injectable } from '@angular/core';
import { Borne } from '../objects/borne';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getAllBornes(): Borne[] {
    return []
  }
  getBornesUntil(date: Date): Borne[] {
    return []
  }
}
