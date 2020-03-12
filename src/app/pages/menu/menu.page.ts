import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OptionService } from 'src/app/services/option/option.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  userIsAdm: boolean;
  constructor(
    private auth: AuthService,
    private opt: OptionService,
    private nav: NavController
    ) {
    }

  ngOnInit() {
    this.userIsAdm = this.auth.userIsAdmin()
  }
  
  goToAddMenu(){
    this.opt.setOption(1);
    this.nav.navigateForward(['/views/add'])
  }
}
