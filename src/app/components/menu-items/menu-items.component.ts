import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  // list: any = [
  //   {title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1'},
  //   {title_menu: "menu prueba2", description_menu: "este es el menu de prueba2", id_menu: '2'}
  // ];
  list: any;
  userIsAdm: boolean;
  constructor(
    private menu: MenuService, 
    private router: Router, 
    private auth: AuthService
    ) { 
      this.userIsAdm = this.auth.userIsAdmin();

      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
            this.getMenus()
        }
     });
  }

  ngOnInit() {
    this.getMenus();
  }

  ionViewDidEnter(){
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
    console.log(item)
  }

  deleteMenu(menuId: string){
    this.menu.deleteMenu(menuId).subscribe(()=>{
      this.getMenus()
    })
  }
}
