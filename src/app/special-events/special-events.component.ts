import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Student } from '../student.model'
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html'
})
export class SpecialEventsComponent implements OnInit 
{  
  student = []
  event=[]
  searchText:string
  showDeletedMessage:Boolean
  vk:Boolean
  Ms:Boolean
  bala:Boolean
  E:boolean=true
  ev
  s=true
  ShowSpinner:boolean=true
  constructor(private _eventService: EventService,
              private _router: Router) { }
              
             

  ngOnInit() 
  {
  
    this._eventService.getEvent().subscribe(
      list => {
        this.event = list.map(item => {
          return {
            $key: item.key,
           
            ...item.payload.val()
            
          };
        });
        this.ShowSpinner=false
      });
      console.log(this.event)
  }
     
  Event(){
    this.Ms=true
    this.vk=false
    this.bala=false
  }
  Detail()
   { 
    this.vk=true
    this.Ms=false
    this.bala=false
    this._eventService.getStudents().subscribe(list => {
      this.student = list.map(item => {
        return {
          $key: item.key,
             
          ...item.payload.val()
          
        }
      })
      this.s=false
    });
    
  }
  filterCondition(student) 
    {
          return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }

    
  onDelete($key) 
  {
    if (confirm('Warning : Are you sure to cancel this entry...?')) 
    {
      this._eventService.deleteStudent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }
     DeleteE()
     {
       console.log("Virat")
       this.bala=true
       this.vk=false
       this.Ms=false
     }

     LogOut()
     {
       this._router.navigate(['/events'])
     }


     e(v)
     {
       this.ev=v
       console.log(v)
       this.E=false
     }
     eve(s)
     {
       if(this.ev==s)
            return true
     }
  }

