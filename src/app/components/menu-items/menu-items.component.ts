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
    this.list = [{title_menu: 'menu1', description_menu: ""}, {title_menu: 'menu2', description_menu: ""}, {title_menu: 'menu3', description_menu: ""}];
    this.menu.getMenus().subscribe((results) => {
      this.list = results;
      console.log(this.list)
    })
  }

  getMenu(menuId: string){
    this.router.navigateByUrl(`/views/submenu/${menuId}`)
  }
}
