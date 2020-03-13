import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController, ToastController } from '@ionic/angular';
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
  constructor(
    private auth: AuthService, 
    private nav: NavController, 
    private theme: ThemeService,
    private toast: ToastController) {

      this.userData = {...this.auth.getUserData()}
      this.darkMode = this.theme.darkMode;
   }

  ngOnInit() {
    this.userIsAdm = this.auth.userIsAdmin()
  }

  changeDarkMode() {
    this.theme.changeTheme();
  }

  registerAdmin(){
    this.nav.navigateRoot(['/register/admin']);
  }

  logout(){
    this.auth.onLogout().subscribe(async res => {
      const toast = await this.toast.create({
        message: "Loged out succesfully",
        duration: 2000,
        color: 'primary'
      });
      toast.present();
      this.nav.navigateRoot(['/login']);
    })
  }
}
