import { Component } from '@angular/core';
import {Borne} from "./objects/borne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';

  print(borne :Borne){
    console.log(borne);
  }
}
