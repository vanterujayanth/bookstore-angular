import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/userServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit{
 // loginForm! : FormGroup;
   loginForm=new FormGroup({
    emailId:new FormControl(''),
    password:new FormControl('')
  });
submitted=false;
constructor(private user:UserService,private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    
  }
  done()
  {
    this.router.navigate(['Dashboard/bookDetails'])
  }
onSubmit()
{
  this.submitted=true;
    if(this.loginForm.valid){
      const reqData={
        emailId:this.loginForm.value.emailId,
        password:this.loginForm.value.password
      };
      console.log(reqData);
      this.user.UserLogin(reqData).subscribe((response:any)=>{
        console.log(response);
        if(response){
          alert('Login Success');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('emailId',response.data.emailId);
          localStorage.setItem('userid', response.data.userid);
          localStorage.setItem('fullName',response.data.fullName);
          localStorage.setItem('mobile',response.data.mobile);
          localStorage.setItem('password',response.data.password);
        }
       
      })
    }

}
  
  
}
