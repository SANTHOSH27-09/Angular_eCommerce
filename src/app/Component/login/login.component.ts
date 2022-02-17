import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  i:any;
  credentials :any; 
  user:any='';
  userName:any='';
  


  constructor(private fb: FormBuilder,public data: AuthServiceService,public router:Router,public route:ActivatedRoute) {
    data.credentials.subscribe(
      (getCredentials:any)=>{
      this.credentials=getCredentials;
     });
     console.log(this.data.login.value);
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required], 
      userPassword: ['', Validators.required] 
    });
    this.userName=this.route.snapshot.paramMap.get('user');
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  login() {
    if (!this.loginForm.dirty){
      alert('Please Enter User Name and Password');
    }
    else{
      for(this.i=0;this.i<this.credentials.length;this.i++)
      {
        if(this.loginForm.value.userName==this.credentials[this.i].userName && this.loginForm.value.userPassword==this.credentials[this.i].userPassword )
        {
          alert('Login successfull');
          this.user=this.loginForm.value.userName;  
          this.router.navigate(["login",this.user]);
          
          this.data.login.next({loggedIn:true,Name:this.loginForm.value.userName});
          console.log(this.data.login.value);
        }          
      }  
    }
  }
}
