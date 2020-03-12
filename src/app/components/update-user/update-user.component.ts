import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  
  username: AbstractControl;
  name: AbstractControl;
  email: AbstractControl;
  gender: AbstractControl;
  age: AbstractControl;
  updateUser : FormGroup;
  isDisabled: boolean = true;
  
  constructor(private auth: AuthService, public formBuilder: FormBuilder, private router: Router) {
    this.updateUser = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });

    this.username = this.updateUser.controls['username'];
    this.name = this.updateUser.controls['name'];
    this.email = this.updateUser.controls['email'];
    this.gender = this.updateUser.controls['gender'];
    this.age = this.updateUser.controls['age'];
   }

  ngOnInit() {
    this.setUserData()
  }

  edit(){
    this.isDisabled = !this.isDisabled;
  }

  setUserData(){
    this.auth.getUser().subscribe((results) => {
      var user = results.data;
      this.updateUser.setValue({
        username: user.username_user,
        name: user.name_user,
        email: user.email_user,
        gender: user.gender_user,
        age: user.age_user
      })
    })
  }

  update(){
    if(this.updateUser.valid){
      this.auth.onUpdate(this.username.value,this.name.value,this.email.value, this.age.value, this.gender.value).subscribe((results)=>{
        this.router.navigateByUrl('views/menu')
      })
    }
  }

}
