import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapSettingsService {
  public clustering = new BehaviorSubject<boolean>(false);
  constructor() {
    this.clustering.next(localStorage.getItem('clustering') === 'true');
  }

  get clusteringEnabled() {
    return this.clustering.value;
  }

  set clusteringEnabled(value: boolean) {
    this.clustering.next(value);
    localStorage.setItem('clustering', value.toString());
  }
}
