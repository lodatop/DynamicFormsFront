import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userData = {};
  userIsAdm: boolean;
  darkMode: boolean;
  constructor(private auth: AuthService, private nav: NavController, private theme: ThemeService) { 
    this.userData = {...this.auth.getUserData()}
    this.darkMode = this.theme.darkMode;
   }

  ngOnInit() {
    this.userIsAdm = this.auth.userIsAdmin()
  }

  changeDarkMode() {
    this.theme.changeTheme();
  }

  logout(){
    this.auth.onLogout().subscribe(res => {
      this.nav.navigateRoot(['/login']);
    })
  }
}
