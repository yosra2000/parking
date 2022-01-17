import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
 signupForm!:FormGroup;
 constructor(private formBuiler:FormBuilder ,private httpClient:HttpClient,private router:Router ) { }
//pour faire la recuperation des données de la formulaire

ngOnInit():void {
  this.signupForm=this.formBuiler.group(
    {
       fullName:[''],    
       mobile : [''],
       email : [''],
       password : ['']
    }
  )



}
//make methode to create user
signUp()
{
  this.httpClient.post<any> ("http://localhost:3000/sigup",this.signupForm.value).subscribe(res=>
 { alert("SignUp Succefull");
  this.signupForm.reset();
  this.router.navigate(["/Login"]);

},err=>{
  alert("Somthing went wrong")
} );

}
}
