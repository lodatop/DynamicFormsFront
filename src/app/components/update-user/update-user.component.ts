import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {

  updateUser : FormGroup;
  constructor(private auth: AuthService, public formBuilder: FormBuilder, private router: Router) {
    this.updateUser = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });
   }

  ngOnInit() {

  }

  update(){
    if(this.updateUser.valid){
      this.auth.onUpdate(this.updateUser.get('username').value,this.updateUser.get('name').value,this.updateUser.get('email').value, this.updateUser.get('age').value, this.updateUser.get('gender').value).subscribe((results)=>{
        this.router.navigateByUrl('views/menu')
      })
    }
  }

}
