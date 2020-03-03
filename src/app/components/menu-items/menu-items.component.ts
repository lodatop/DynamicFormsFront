import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  list: any;
  constructor(private menu: MenuService,
    private router: Router) { }

  ngOnInit() {
    this.getMenus();
  }

  ionViewWillEnter(){
    this.getMenus();
  }

  getMenus(){
    this.menu.getMenus().subscribe((results) => {
      this.list = results;
      console.log(this.list)
    })
  }


}
