import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  chart: any = [];

  constructor( private stats: ChartService ) { }

  ngOnInit() {
    this.stats.getFormStadistics()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let allDates  = res['list'].map(res => res.dt);

        let dates =[]
        allDates.forEach(res => {
          let jsdate = new Date(res * 1000)
          dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
        });
        
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false,
                // lineTension: 0
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false,
                // lineTension: 0
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
  }
  
  // showStats() {
  //   let quant = [15, 2, 16, 20];
  //   let forms = ["form 1", "form 2", "form 3", "form 4"]
  
  //   this.chart = new Chart('canvas', {
  //     type: 'line',
  //     data: {
  //       labels: forms,
  //       datasets: [
  //         {
  //           data: quant,
  //           borderColor: '#ffcc00',
  //           fill: false
  //         }
  //       ]
  //     },
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       scales: {
  //         xAxes: [{
  //           display: true
  //         }],
  //         yAxes: [{
  //           display: true
  //         }]
  //       }
  //     }
  //   })
  // }



}
