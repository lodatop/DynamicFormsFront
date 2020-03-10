import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.page.html',
  styleUrls: ['./submenu.page.scss'],
})
export class SubmenuPage implements OnInit {
  
  public menuId: string;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuId = this.route.snapshot.paramMap.get('menuId');
  }

}
