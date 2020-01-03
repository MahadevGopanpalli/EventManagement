import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public fbobj : FormBuilder,
    private eventService : EventService,
    private _router: Router){}
    showSuccessMessage=false;
    submitted:boolean;
    W=false
    T=true
    @Input() public event;
  ngOnInit()
  {
    console.log(this.event)
  }

  MarvellousForm =  new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    class: new FormControl(''),
    
  });
 
onSubmit(){ 
this.submitted=true;
  console.log(this.MarvellousForm.value)
  
  let data = Object.assign({}, this.MarvellousForm.value);
  data.id=this.event;
     if(this.eventService.insertDetail(data))
      {
        this.showSuccessMessage=true;
        this.MarvellousForm.setValue({
          id:null,
          name: '',
          email: '',
          mobile: '',
          class: ''
        });
        this._router.navigate(['/events'])
        alert("Data gets Submitted Successfully to Event...")
        this.W=true
        this.T=false
      }
      setTimeout(() => this.showSuccessMessage = false, 3000);
    
    
  }
  

}
