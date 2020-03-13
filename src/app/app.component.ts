import { Component, ElementRef, DoCheck } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements DoCheck {
  constructor(
    private nav: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private elementRef: ElementRef,
    private theme: ThemeService
  ) {
    // this.auth.logout()
    this.auth.userIsLoged().then(data => {
      if(data){
        this.nav.navigateRoot(['/views/menu'])
      }else{
        console.log(data)
        this.nav.navigateRoot(['/login'])
      }
    });
      
    this.initializeApp();
  }

  ngDoCheck(){
    if (!this.theme.darkMode) {
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-background-color', '#f4f5f8');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-background-color-rgb', '244, 244, 244');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-text-color', '#39393a');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-text-color-rgb', '57, 57, 58');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--app-icons-color', '#4b5059');
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-background-color', '#4b5059');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-background-color-rgb', '75, 80, 89');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-text-color', '#ffffff');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--ion-text-color-rgb', '255, 255, 255');
      this.elementRef.nativeElement.ownerDocument.body.style.setProperty('--app-icons-color', '#ffffff');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
