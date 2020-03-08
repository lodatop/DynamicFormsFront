import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  private formId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get('formId')
  }

}
