import { Component, ViewChild } from '@angular/core';
import { AddItemComponent } from '../components/add-item/add-item.component'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private nav: NavController) {}
  
}
