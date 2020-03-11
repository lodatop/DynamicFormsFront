import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  list: any = [{title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1'}];
  // list: any;
  userIsAdm: boolean;
  constructor(
    private menu: MenuService, 
    private router: Router, 
    private auth: AuthService
    ) { 
      this.userIsAdm = this.auth.userIsAdmin();
  }

  ngOnInit() {
    this.getMenus();
  }

  ionViewWillEnter(){
    this.getMenus();
  }

  getMenus(){
   this.menu.getMenusWithoutParents().subscribe((results) => {
      this.list = results;
      console.log(this.list)
    })
  }

  getMenu(menuId: string){
    this.router.navigateByUrl(`/views/submenu/${menuId}`)
  }

  editMenu(item){
    console.log("edit menu")
  }

  deleteMenu(item){
    console.log("delete menu")
  }
}
