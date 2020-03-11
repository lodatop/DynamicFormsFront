import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  userIsAdm: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userIsAdm = this.auth.userIsAdmin()
  }
  
  goToAddMenu(){
    console.log('hola')
  }
}
