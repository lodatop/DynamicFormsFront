import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit, DoCheck {
  isDisabled: boolean = true;
  menuTitle: AbstractControl;
  menuDescription: AbstractControl;
  menuCreation : FormGroup;
  @Input() menuId?: string;
  constructor(
    private menu: MenuService, 
    public formBuilder: FormBuilder, 
    private router: Router,
    private toast: ToastController) {
    this.menuCreation = this.formBuilder.group({
      menuTitle: ['', Validators.required],
      menuDescription: ['', Validators.required]
    });

    this.menuTitle = this.menuCreation.controls['menuTitle'];
    this.menuDescription = this.menuCreation.controls['menuDescription'];
  }

  ngDoCheck() {
    if(this.menuTitle.value == "" || this.menuDescription.value ==""){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  ngOnInit() {}

  createMenu(){
    if(this.menuCreation.valid){
      if(this.menuId){
        this.menu.createMenu(this.menuTitle.value, this.menuDescription.value, this.menuId).subscribe(async (results)=>{
          this.router.navigateByUrl(`views/submenu/${this.menuId}`)
          const toast = await this.toast.create({
            message: 'Submenu added succesfully',
            duration: 2000,
            color: 'primary'
          });
          toast.present();
        })
      }else{
        this.menu.createMenu(this.menuTitle.value, this.menuDescription.value, 'none').subscribe(async (results)=>{
          this.router.navigateByUrl('views/menu')
          const toast = await this.toast.create({
            message: 'Menu added succesfully',
            duration: 2000,
            color: 'primary'
          });
          toast.present();
        })
      }
    }
  }

}
