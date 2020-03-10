import { Component, OnInit, Input } from '@angular/core';
import { OptionService } from '../../services/option.service';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {

  @Input() menuId: string;
  submenuList: any;
  formList: any;
  menuData: any;
  constructor(private form: OptionService, private menu: MenuService, 
    private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){ this.menu.getMenusByParent(this.menuId).subscribe((results) => {
      this.submenuList = results.data.submenus;
      this.formList = results.data.forms;
      this.menuData = results.data.menu;
    })
  }

  getForm(formId: string){
    this.router.navigateByUrl(`/views/form/${formId}`)
  }

  getMenu(menuId: string){
    this.router.navigateByUrl(`/views/submenu/${menuId}`)
  }

  addMenu(){}
}
