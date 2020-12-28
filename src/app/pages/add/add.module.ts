import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../../components/components.module';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule
  ],
  declarations: [AddPage]
})
export class AddPageModule {}
