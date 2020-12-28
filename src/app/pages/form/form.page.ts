import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OptionService } from 'src/app/services/option/option.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private formId: string;
  private formData: any;
  constructor(
    private route: ActivatedRoute,
    private form: OptionService,
    private nav: NavController 
    ) { }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get('formId')
    this.getFormData()
  }

  goBack(){
    this.nav.back();
  }

  getFormData(){
    this.form.getForm(this.formId).subscribe((results)=>{
      this.formData = results.data.form
      console.log(this.formData)
    })
  }

}
