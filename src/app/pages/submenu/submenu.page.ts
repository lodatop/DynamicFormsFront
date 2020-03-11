import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.page.html',
  styleUrls: ['./submenu.page.scss'],
})
export class SubmenuPage implements OnInit {
  
  public menuId: string;
  constructor( private route: ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
    this.menuId = this.route.snapshot.paramMap.get('menuId');
  }

  goBack(){
    this.nav.back();
  }
}
