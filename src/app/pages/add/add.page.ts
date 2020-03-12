import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from '../../components/add-item/add-item.component';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private menuId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuId = this.route.snapshot.paramMap.get('menuId')
  }

}
