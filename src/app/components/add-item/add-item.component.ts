import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OptionService } from 'src/app/services/option/option.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  
  option: number;
  menuId: any;
  constructor(private nav: NavController, private opt: OptionService) {
  }

  ngOnInit() {
    this.option = this.opt.getOption();
  }
  
}
