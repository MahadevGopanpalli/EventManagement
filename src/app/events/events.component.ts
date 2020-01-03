import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit 
{
  k:Boolean
  m=true
  event
  events = []
  ShowSpinner:boolean=true
  constructor(private _eventService: EventService) { }

  ngOnInit() 
  {
    this._eventService.getEvent().subscribe(
      list => {
        this.events = list.map(item => {
          return {
            $key: item.key,
           
            ...item.payload.val()
            
          };
        });
      this.ShowSpinner=false  
      });
      
      console.log(this.events.values)
  }

  Form(s)
  {
    console.log(s)
    this.k=true
    this.m=false
    this.event=s
  }
}
