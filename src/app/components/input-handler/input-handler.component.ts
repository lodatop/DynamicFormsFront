import { Component, OnInit, Input } from '@angular/core';
import { InputService } from '../../services/input/input.service';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { from } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-input-handler',
  templateUrl: './input-handler.component.html',
  styleUrls: ['./input-handler.component.scss'],
})
export class InputHandlerComponent implements OnInit {

  @Input() formId: string;
  // inputList: any = [{id_input: 1,label_input: 'a label'},{id_input: 2,label_input: 'a label2'}];
  inputList: any = [];
  addInputToForm : FormGroup;
  inputId: AbstractControl;

  constructor(private input: InputService, public formBuilder: FormBuilder, private toast: ToastController){
    this.addInputToForm = this.formBuilder.group({
      inputId: ['', Validators.required]
    });
    
    this.inputId = this.addInputToForm.controls['inputId'];
  }

  ngOnInit(){
    this.getInputs();
  }

  noDoCheck(){
    this.getInputs();
  }

  getInputs(){
    this.input.getAllInputs().subscribe((results) => {
      this.inputList = results;
    })
  }

  addInput(){
    if(this.addInputToForm.valid){
      console.log(this.inputId.value);
      this.input.addInputToForm(this.formId, this.inputId.value).subscribe(async (results)=>{
        this.getInputs();
        this.addInputToForm.setValue({
          inputId: ''
        });
        const toast = await this.toast.create({
          message: 'Input was added bitch',
          duration: 2000,
          color: 'primary'
        })
        toast.present()
      })
    }
  }

  inputAdded(input: any){
    // this.inputList.push({...input, id_input: 3})
    // this.getInputs();
    console.log(input)
  }

}
