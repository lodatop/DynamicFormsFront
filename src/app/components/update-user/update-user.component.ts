import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {

  updateUser : FormGroup;
  isEnabled : boolean = false;
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
    this.setUserData()
  }

  edit(){
    this.isEnabled = !this.isEnabled;
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
      this.auth.onUpdate(this.updateUser.get('username').value,this.updateUser.get('name').value,this.updateUser.get('email').value, this.updateUser.get('age').value, this.updateUser.get('gender').value).subscribe((results)=>{
        this.router.navigateByUrl('views/menu')
      })
    }
  }

}
