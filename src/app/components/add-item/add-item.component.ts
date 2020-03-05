import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() option: number = 0;

  constructor(private router: NavController) {
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
