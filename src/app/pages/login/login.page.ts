import { Component, OnInit, DoCheck } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
})
export class LoginPage implements OnInit, DoCheck {

  username: string = '';
  password: string = '';
  isDisabled: boolean = true;

  constructor(private toast: ToastController,
              private auth: AuthService, 
              private loadingCtrl: LoadingController, 
              private nav: NavController) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.username !== "" && this.password !==""){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
  
  login() {
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        this.auth.onLogin(this.username, this.password).subscribe(async (data) => {
          loadingEl.dismiss();
          if (data.status === 200) {
            this.auth.userIsLoged().then(async ()=>{
              const toast = await this.toast.create({
                message: `Welcome ${this.username}`,
                duration: 2000,
                color: 'primary'
              });
              toast.present();
              this.nav.navigateRoot(['/views/menu'])
            })
        } else {
            loadingEl.dismiss();
            const toast = await this.toast.create({
              message: `Failed login`,
              duration: 2000,
              color: 'primary'
            });
            toast.present();
        }
        },async ()=> {
            loadingEl.dismiss();
            const toast = await this.toast.create({
              message: `Failed login`,
              duration: 2000,
              color: 'primary'
            });
            toast.present();
        });
      })
    // await this.auth.login();
    // this.auth.userIsLoged().then(data => {
    //   if(data){
    //     this.nav.navigateRoot(['/views/menu'])
    //   }
    // });
  }

}
