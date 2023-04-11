import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  pageActive : string =""

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        if(event.url === '/map' || event.url === ''){
          this.pageActive="map"
        }else if (event.url === '/presentation'){
          this.pageActive="home"
        }else if (event.url === '/charts'){
          this.pageActive="charts"
        }
      }
    });
    console.log(this.pageActive)
  }
}
