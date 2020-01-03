import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
import { EventService } from '../event.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public fbobj : FormBuilder,
    private eventService : EventService,
    private _router: Router){}
    showSuccessMessage=false;
    submitted:boolean;
  ngOnInit()
  {
  }

  MarvellousForm =  new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  time: new FormControl('',Validators.required)
  });
 
onSubmit(){ 
this.submitted=true;
  console.log(this.MarvellousForm.value)
  let data = Object.assign({}, this.MarvellousForm.value);
  delete data.id;
     if(this.eventService.insertEvent(data))
      {
        this.showSuccessMessage=true;
       
        this._router.navigate(['/events'])
        alert("Event Added Successfully to Homepage...")
      }
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.MarvellousForm.reset();
    
  }

}
