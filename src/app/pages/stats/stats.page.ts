import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../services/chart/chart.service';
import { Chart } from 'chart.js';
import { OptionService } from 'src/app/services/option/option.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  chart: any = {};
  formList: any;
  @ViewChild("canvas", {static: false}) canvas: ElementRef;
  mostVisited = {title_form: '', completed_form: 0};

  constructor( private stats: ChartService, private form: OptionService ) { }

  getRandomNumber(){
    return Math.floor(Math.random()*256);
  }

  ngOnInit() {
    
    let title_forms = [];
    let completed = [];
    let backgroundColor = [];
    
    this.form.getForms().subscribe((results)=> {
      this.formList = results;

      console.log(this.formList)
    
      this.formList.map(el => {
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
    })
  }     
}
