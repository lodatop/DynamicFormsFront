import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { OptionService } from '../../services/option/option.service';
import { MenuService } from '../../services/menu/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {

  @Input() menuId: string;
  // submenuList: any = [{title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1'}];
  submenuList: any = [];
  formList: any = [];
  userIsAdm: boolean;
  menuData: any;
  // menuData: {} = {title_menu: "menu prueba", description_menu: "este es el menu de prueba", id_menu: '1'}
  constructor(
    private opt: OptionService, 
    private menu: MenuService, 
    private auth: AuthService, 
    private nav: NavController,
    private router: Router) { 
      this.userIsAdm = this.auth.userIsAdmin();

      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
            this.getData()
        }
      });
    }

  ngOnInit() {
    this.getData();
  }
  
  getData(){ 
    this.menu.getMenusByParent(this.menuId).subscribe((results) => {
      this.submenuList = results.data.submenus;
      this.formList = results.data.forms;
      this.menuData = results.data.menu;
    })
  }

  getForm(formId: string){
    this.router.navigateByUrl(`/views/form/${formId}`);
  }

  getMenu(menuId: string){
    this.router.navigateByUrl(`/views/submenu/${menuId}`);
  }

  addMenuToSubmenu(){
    this.opt.setOption(1);
    this.nav.navigateForward([`/views/add/${this.menuId}`]);
  }

  addFormToSubmenu(){
    this.opt.setOption(2);
    this.nav.navigateForward([`/views/add/${this.menuId}`]);
  }

  deleteSubmenu(menuId: string){
    this.menu.deleteMenu(menuId).subscribe(()=>{
      this.getData()
    })
  }

  deleteForm(formId: string){
    this.opt.deleteForm(formId).subscribe(()=>{
      this.getData()
    })
  }
}
