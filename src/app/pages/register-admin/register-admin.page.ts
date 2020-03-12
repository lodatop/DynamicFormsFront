import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';

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

  constructor(private auth: AuthService, private nav: NavController) { }

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
    this.auth.onAdminRegister(this.name, this.username, this.email, this.password, this.age, this.gender).subscribe((data) => {
      this.nav.back();
    })
  }

  goBack(){
      this.nav.back();
  }
}
