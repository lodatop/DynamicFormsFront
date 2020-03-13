import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode: boolean = false;
  constructor() { }

  changeTheme() {
    this.darkMode = !this.darkMode;
    return this.darkMode;
  }

}
