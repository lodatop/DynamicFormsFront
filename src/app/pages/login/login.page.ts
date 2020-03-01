import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: NavController, private toast: ToastController,
              private auth: AuthService) { }

  ngOnInit() {
  }
  
  login() {
    this.auth.onLogin(this.username, this.password).subscribe((data) => {
      console.log(data);
    })
  }
}
