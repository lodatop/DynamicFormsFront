import { NgModule, Input } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OptionService } from 'src/app/services/option.service';


@NgModule({
  imports: [
    
  ],
  declarations: []
})
export class AddFormModule {
    formCreation : FormGroup;
    @Input() menuId: string;
    isEnabled:boolean = true;
    formCreated:boolean = false;
    formId: string;
    constructor(public formBuilder: FormBuilder, private form: OptionService) {
        
      this.formCreation = this.formBuilder.group({
        formTitle: ['', Validators.required],
        formDescription: ['', Validators.required]
      });
    }

    createForm() {
        if (this.formCreation.valid) {
            this.form.createForm(this.menuId, this.formCreation.get('formTitle').value, this.formCreation.get('formDescription').value).subscribe((results) => {
              this.formCreated = true;
              this.isEnabled = false;
              this.formId = results.data.id;
            })
        }
    }

}
