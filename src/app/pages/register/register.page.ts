import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private auth: AuthService) { }

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
    this.auth.onRegister(this.name, this.username, this.email, this.password, this.age, this.gender).subscribe((data) => {
      console.log(data);
    })
  }

}
