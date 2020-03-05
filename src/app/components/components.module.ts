import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent  } from './menu-items/menu-items.component';
import { FormItemComponent } from './form-item/form-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';




@NgModule({
  imports: [IonicModule, FormsModule, CommonModule],
  declarations:
  [ MenuItemsComponent, FormItemComponent, AddItemComponent, AddMenuComponent ],
  exports:
  [ MenuItemsComponent, FormItemComponent, AddItemComponent, AddMenuComponent ]
})
export class ComponentModule {}
