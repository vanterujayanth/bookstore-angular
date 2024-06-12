import { Component } from '@angular/core';
import { UserService } from '../../Services/userServices/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  submitted=false;
  display=true;
  //signForm !: FormGroup
   constructor(private user:UserService,private formBuilder:FormBuilder ,private router:Router){}
  signForm=new FormGroup({
    fullName:new FormControl('',Validators.required),
    emailId:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required)
  });
   onSubmit(){
    this.submitted=true;
    if(this.signForm.valid){
      const reqData={
        emailId:this.signForm.value.emailId,
        password:this.signForm.value.password,
        fullName:this.signForm.value.fullName,
        mobile:this.signForm.value.mobile

      };
      console.log(reqData);
      this.user.register(reqData).subscribe((response:any)=>{
        console.log(response);
        if(response){
          alert('SignUp Successs Go For Login');
        }
      })
    }
    this.router.navigate(['Dashboard/bookDetails'])
  }
}
