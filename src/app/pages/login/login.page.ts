import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private toast: ToastController,
              private auth: AuthService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  
  login() {
    this.loadingCtrl
        .create({ keyboardClose: true, message: 'Logging in...' })
        .then(loadingEl => {
          loadingEl.present();
          this.auth.onLogin(this.username, this.password).subscribe((data) => {
            loadingEl.dismiss();
            if (data.status === 200) {
              this.router.navigateByUrl('/views/menu');
          }
          });
        })
  }
}
