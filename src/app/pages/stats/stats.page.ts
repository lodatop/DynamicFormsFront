import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../services/chart/chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  chart: any = {};
  @ViewChild("canvas", {static: false}) canvas: ElementRef;
  mostVisited = {title_form: '', completed_form: 0};

  constructor( private stats: ChartService ) { }
  
  ionViewWillEnter(){
  }

  getRandomNumber(){
    return Math.floor(Math.random()*256);
  }

  ngOnInit() {
    this.stats.getFormStadistics()
      .subscribe(res => {
        // let arr = res['list'].map(res => res);
        let arr = [
          {title_form: "form1", completed_form: 50}, 
          {title_form: "form2", completed_form: 45}, 
          {title_form: "form3", completed_form: 10}, 
          {title_form: "form5", completed_form: 61}, 
          {title_form: "form4", completed_form: 25}
        ];
        let title_forms = [];
        let completed = [];
        let backgroundColor = [];
        arr.map(el => {
          if(this.mostVisited.completed_form < el.completed_form){
            this.mostVisited = {...el}
          }
          title_forms.push(el.title_form);
          completed.push(el.completed_form);
          backgroundColor.push(`rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`);
        });
        console.log(this.mostVisited)
        var myPieChart = new Chart(this.canvas.nativeElement, {
          type: 'pie',
          data: {
            datasets: [{
              data: completed,
              backgroundColor,
              borderColor: "#F6FFF8"
              
            }],
            labels: title_forms
          },
          options: {
            legend:{
              position: 'bottom'
            }
          }
      });


        // let temp_max = res['list'].map(res => res.main.temp_max);
        // let temp_min = res['list'].map(res => res.main.temp_min);
        // let allDates  = res['list'].map(res => res.dt);
        // let dates = ["form 1", "form 2", "form 3"];
        // allDates.forEach(res => {
        //   let jsdate = new Date(res * 1000)
        //   dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
        // });
        
      //   this.chart = new Chart(this.canvas.nativeElement, {
      //     type: 'line',
      //     data: {
      //       labels: dates,
      //       datasets: [
      //         {
      //           data: temp_min,
      //           borderColor: '#3cba9f',
      //           fill: false,
      //           // lineTension: 0
      //         },
      //         {
      //           data: temp_max,
      //           borderColor: '#ffcc00',
      //           fill: false,
      //           // lineTension: 0
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
      //           // lineHeight: 1.0
      //         }],
      //         yAxes: [{
      //           display: true
      //         }]
      //       }
      //     }
      //   })
      })
  }
  
  // showStats() {
  //   let quant = [15, 2, 16, 20];
  //   let forms = ["form 1", "form 2", "form 3", "form 4"]
  
  //   this.chart =  new Chart('canvas', {
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
