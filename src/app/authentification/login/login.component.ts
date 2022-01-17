import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import {FormBuilder,FormGroup} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder , private http: HttpClient, private router:Router) { }

  ngOnInit() {

    this.loginForm=this.formBuilder.group({
     email:[''],
     password:['']
    })
  }
  login()
  {
this.http.get<any> ("http://localhost:3000/sigup").subscribe(res=> 
{
  const user=res.find((a:any)=>
  {
    return a.email===this.loginForm.value.email && a.password === this.loginForm.value.password
  });
  if (user)
  {
    alert ("login Success");
    this.loginForm.reset();
    this.router.navigate(["/ListeParkings"]);
  }
  else{
    alert("user not found");
  }
}, err=>
{
  alert("Something went wrong !!! ")
})
  }

}