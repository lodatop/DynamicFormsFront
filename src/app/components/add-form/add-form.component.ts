import { Component, OnInit } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  
  list: any;
  constructor() { }

  ngOnInit() {
    console.log("hola")
  }

}
