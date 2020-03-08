import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmenuPageRoutingModule } from './submenu-routing.module';

import { SubmenuPage } from './submenu.page';
import { ComponentModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule,
    IonicModule,
    SubmenuPageRoutingModule
  ],
  declarations: [SubmenuPage]
})
export class SubmenuPageModule {}
