import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userData = {};

  constructor(private auth: AuthService, private nav: NavController) { 
    this.userData = {...this.auth.getUserData()}
   }

  ngOnInit() {
  }

  logout(){
    this.auth.onLogout().subscribe(res => {
      this.nav.navigateRoot(['/login']);
    })
  }
}
