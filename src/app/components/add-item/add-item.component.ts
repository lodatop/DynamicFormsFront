import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  constructor(private router: NavController) { }

  ngOnInit() {}

  addMenu() {
    this.router.navigateForward(['/views/menu']);
  };

  addForm() {
    this.router.navigateForward(['/views/tab3']);
  };
}
