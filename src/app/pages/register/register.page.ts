import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, DoCheck {

  name: string;
  email: string;
  username: string;
  password: string;
  gender: string;
  age: number;
  isDisabled: boolean = true;

  constructor(
    private auth: AuthService,
    private toast: ToastController,
    private nav: NavController
    ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.name !== "" && this.email !=="" && this.username !=="" && this.password !=="" && this.gender !=="" && this.age ){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }

  register() {
    this.auth.onRegister(this.name, this.username, this.email, this.password, this.age, this.gender).subscribe(async (data) => {
      const toast = await this.toast.create({
        message: 'User registered succesfully',
        duration: 2000,
        color: 'primary'
      });
      toast.present();
      this.nav.navigateRoot(['/login']);
    })
  }

}
