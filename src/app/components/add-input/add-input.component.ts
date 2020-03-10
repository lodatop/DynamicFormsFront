import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InputService } from '../../services/input.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss'],
})
export class AddInputComponent implements OnInit {

  @Output() refreshInputs: EventEmitter<any> = new EventEmitter();
  addInput : FormGroup;

  constructor(public formBuilder: FormBuilder, private input: InputService) {
    this.addInput = this.formBuilder.group({
        label: ['', Validators.required],
        type: ['text', Validators.required]
    });
  }

  ngOnInit() {}

  createInput(){
    if(this.addInput.valid){
      this.input.createInput(this.addInput.get('label').value, this.addInput.get('type').value).subscribe((results) =>{
        alert(results)
        this.refreshInputs.emit();
      })
    }
  }

}
