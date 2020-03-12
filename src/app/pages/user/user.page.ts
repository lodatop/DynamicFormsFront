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
  userIsAdm: boolean;
  constructor(private auth: AuthService, private nav: NavController) { 
    this.userData = {...this.auth.getUserData()}
   }

  ngOnInit() {
    this.userIsAdm = this.auth.userIsAdmin()
  }

  logout(){
    this.auth.onLogout().subscribe(res => {
      this.nav.navigateRoot(['/login']);
    })
  }
}
