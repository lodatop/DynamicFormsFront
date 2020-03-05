import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent  } from './menu-items/menu-items.component';
import { FormItemComponent } from './form-item/form-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [IonicModule, FormsModule, CommonModule],
  declarations:
  [ MenuItemsComponent, FormItemComponent, AddItemComponent, AddMenuComponent, AddFormComponent ],
  exports:
  [ MenuItemsComponent, FormItemComponent, AddItemComponent, AddMenuComponent, AddFormComponent ]
})
export class ComponentModule {}
