import { Component, OnInit, Input } from '@angular/core';
import { InputService } from '../../services/input/input.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-input-handler',
  templateUrl: './input-handler.component.html',
  styleUrls: ['./input-handler.component.scss'],
})
export class InputHandlerComponent implements OnInit {

  @Input() formId: string;
  private inputList: any;
  addInputToForm : FormGroup;
  constructor(private input: InputService, public formBuilder: FormBuilder){
    this.addInputToForm = this.formBuilder.group({
      inputId: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.getInputs()
  }

  getInputs(){
    this.input.getAllInputs().subscribe((results) => {
      this.inputList = results;
    })
  }

  addInput(){
    
    if(this.addInputToForm.valid){
      this.input.addInputToForm(this.formId, this.addInputToForm.get('inputId').value).subscribe((results)=>{
        alert('Input was added')
      })
    }
  }

}
