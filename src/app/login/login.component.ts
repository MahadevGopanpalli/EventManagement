import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
import { Router } from '@angular/router'
import {log} from './log.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit 
{

  
  Data=[];
  Bal=false
  V
  log:Boolean
  
  

  constructor(public fbobj : FormBuilder,
              private _router: Router) { }
              loginUserData =  new FormGroup({
    
                name: new FormControl('', Validators.required),
               password: new FormControl('', Validators.required),
                
              });
  ngOnInit() 
  {
    
  }

 loginUser () 
 {
   let data = Object.assign({}, this.loginUserData.value);
   //console.log(data.name)
  { if(data.name=="Mahadev" && data.password=="Vaibhav18vk"){
        this._router.navigate(['/special'])	
   this.log=true}else
   { 
    this.V=true 
   } 

}

}
}