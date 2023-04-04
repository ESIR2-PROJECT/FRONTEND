import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartData} from 'chart.js';
import { BornePoint } from '../objects/borne';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})


export class ChartsComponent implements OnInit {
  borne:BornePoint[]=[];
   datasets: ChartConfiguration['data'] | undefined= undefined;
  
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  async getAll(){
    this.borne = []
    await this.dataservice.getBornes().then(async (bornes: BornePoint[]) => {
      this.borne = bornes
      this.changeData(this.borne)
      //await this.changeData(this.targetDate)
    }).catch((e: Error) => {
      //this.error = e.message
    })
  }

  createDataset(year:any,data :any){
    this.datasets = {
      datasets: [{
        data: data,
        label:"Nombre de borne"
      }],
      labels:year
    };
    console.log(this.datasets)
  }
  changeData(data:BornePoint[]) {
    let counts = data.reduce((acc: {[year: number]: number}, curr) => {
      let year = curr.date?.getFullYear();
      if (year) {
        if (!acc[year]) {
          acc[year] = 0;
        }
        acc[year]++;
      }
      return acc;
    }, {});
    //let countsArray = Object.entries(counts).map(([year, count]) => ({ year: Number(year), count }));
    let yearsArray = Object.keys(counts).map(year => Number(year));
    let countsArray = Object.values(counts);
    //console.log(countsArray)
    this.createDataset(yearsArray,countsArray)
  }
}
