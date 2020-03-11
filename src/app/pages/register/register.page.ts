import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  username: string;
  password: string;
  gender: string;
  age: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.onRegister(this.name, this.username, this.email, this.password, this.age, this.gender).subscribe((data) => {
      console.log(data);
    })
  }

}
