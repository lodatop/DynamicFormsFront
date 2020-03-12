import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit {

  menuCreation : FormGroup;
  @Input() menuId?: string;
  constructor(private menu: MenuService, public formBuilder: FormBuilder, private router: Router) {
    this.menuCreation = this.formBuilder.group({
      menuTitle: ['', Validators.required],
      menuDescription: ['', Validators.required]
    });
   }

  ngOnInit() {}

  createMenu(){
    if(this.menuCreation.valid){
      if(this.menuId){
        this.menu.createMenu(this.menuCreation.get('menuTitle').value, this.menuCreation.get('menuDescription').value, this.menuId).subscribe((results)=>{
          this.router.navigateByUrl(`views/submenu/${this.menuId}`)
        })
      }else{
        this.menu.createMenu(this.menuCreation.get('menuTitle').value, this.menuCreation.get('menuDescription').value, 'none').subscribe((results)=>{
          this.router.navigateByUrl('views/menu')
        })
      }
    }
  }

}
