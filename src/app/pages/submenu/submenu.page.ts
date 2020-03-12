import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.page.html',
  styleUrls: ['./submenu.page.scss'],
})
export class SubmenuPage implements OnInit {
  
  menuId: string;
  menuData: any;
  // menuData: any = {title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1'}
  constructor( 
    private route: ActivatedRoute, 
    private nav: NavController, 
    private menu: MenuService){}

  ngOnInit() {
    this.menuId = this.route.snapshot.paramMap.get('menuId');
    this.getMenuData();
  }

  goBack(){
    this.nav.back();
  }

  getMenuData(){ 
    this.menu.getMenusByParent(this.menuId).subscribe((results) => {
      this.menuData = results.data.menu;
    })
  }
}