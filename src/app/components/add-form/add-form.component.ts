import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OptionService } from 'src/app/services/option/option.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit, DoCheck {
  
  isDisabled: boolean = true;
  formTitle: AbstractControl;
  formDescription: AbstractControl;
  formCreation : FormGroup;
  @Input() menuId: string;
  formCreated:boolean = false;
  formId: string;
  
  constructor(
    public formBuilder: FormBuilder, 
    private form: OptionService,
    private toast: ToastController) {

    this.formCreation = this.formBuilder.group({
      formTitle: ['', Validators.required],
      formDescription: ['', Validators.required]
    });

    this.formTitle = this.formCreation.controls['formTitle'];
    this.formDescription = this.formCreation.controls['formDescription'];
  }
  
  ngOnInit() {}

  ngDoCheck() {
    if(this.formTitle.value == "" || this.formDescription.value ==""){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  createForm() {
    if (this.formCreation.valid) {
      // this.formCreated = true;
      this.form.createForm(this.menuId, this.formTitle.value, this.formDescription.value).subscribe(async (results) => {
        const toast = await this.toast.create({
          message: 'Form created succesfully',
          duration: 2000,
          color: 'primary'
        });
        toast.present();
        this.formCreated = true;
        this.formId = results.data.id;
      })
    }
  }
  
}
