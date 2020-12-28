import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.page.html',
  styleUrls: ['./register-admin.page.scss'],
})
export class RegisterAdminPage implements OnInit, DoCheck {

  name: string;
  email: string;
  username: string;
  password: string;
  gender: string;
  age: number;
  isDisabled: boolean = true;

  constructor(
    private auth: AuthService, 
    private nav: NavController, 
    private toast: ToastController) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.name !== "" && this.email !=="" && this.username !=="" && this.password !=="" && this.gender !=="" && this.age ){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }

  registerAdmin() {
    this.auth.onAdminRegister(this.name, this.username, this.email, this.password, this.age, this.gender).subscribe(async (data) => {
      const toast = await this.toast.create({
        message: 'Admin registered succesfully',
        duration: 2000,
        color: 'primary'
      });
      toast.present();
      this.nav.back();
    })
  }

  goBack(){
      this.nav.back();
  }
}
