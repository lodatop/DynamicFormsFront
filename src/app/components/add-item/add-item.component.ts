import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  
  option: number;
  constructor(private router: NavController) {
    this.option=0;
  }

  ngOnInit() {

  }
  
  addMenu() {
    this.option = 1;
  };

  addForm() {
    this.option = 2;
  };
}
