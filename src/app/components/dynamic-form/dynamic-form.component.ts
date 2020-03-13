import { Component, OnInit, Input } from '@angular/core';
import { OptionService } from '../../services/option/option.service';
import { InputService } from '../../services/input/input.service';
import { AnswerService } from '../../services/answer/answer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {

  public answerArray:any = [];
  public inputList: any;
  @Input() formId: string;
  constructor(private form: OptionService,
    private router: Router, private input: InputService, private answer: AnswerService) { }

  ngOnInit() {
    this.renderForm()
  }
  renderForm(){
    this.input.getInputsByForm(this.formId).subscribe((results) => {
      this.inputList = results;
      for(let i=0; i< this.inputList.length; i++){
        this.answerArray.push({id:this.inputList[i].id_input, answer: ''}) ;
      }  
    })
  }

  onSubmit(){
    console.log(this.answerArray)
    this.answer.createAnswer(this.formId, JSON.stringify(this.answerArray)).subscribe((results) => {
      alert(JSON.stringify(results));
      this.router.navigateByUrl('views/menu');
    })
  }

}
