import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent  } from './menu-items/menu-items.component';
import { FormItemComponent } from './form-item/form-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InputHandlerComponent } from './input-handler/input-handler.component';
import { AddInputComponent } from './add-input/add-input.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  imports: [IonicModule, FormsModule, CommonModule,ReactiveFormsModule],
  declarations:[ 
    MenuItemsComponent, 
    FormItemComponent, 
    AddItemComponent, 
    AddMenuComponent, 
    AddFormComponent, 
    DynamicFormComponent,
    InputHandlerComponent,
    AddInputComponent,
    UpdateUserComponent
  ],
  exports:[ 
    MenuItemsComponent, 
    FormItemComponent, 
    AddItemComponent, 
    AddMenuComponent, 
    AddFormComponent, 
    DynamicFormComponent,
    InputHandlerComponent,
    AddInputComponent, 
    ReactiveFormsModule,
    UpdateUserComponent
  ]
})
export class ComponentModule {}
