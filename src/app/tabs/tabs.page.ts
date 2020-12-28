import { Component, ViewChild, DoCheck } from '@angular/core';
import { AddItemComponent } from '../components/add-item/add-item.component'
import { NavController } from '@ionic/angular';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements DoCheck {
  darkMode: boolean;
  constructor(private nav: NavController, private theme: ThemeService) {}
  
  ngDoCheck(){
    this.darkMode = this.theme.darkMode;
  }
}
