import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-del-event',
  templateUrl: './del-event.component.html',
  styleUrls: ['./del-event.component.css']
})
export class DelEventComponent implements OnInit {
  Event=[]
  
  showDeletedMessage:Boolean
  constructor(private _eventService:EventService) {}

  ngOnInit() {
    this._eventService.getEvent().subscribe(list => {
      this.Event = list.map(item => {
        return {
          $key: item.key,
             
          ...item.payload.val()
          
        }
      })
    });
    console.log(this.Event.values)
  }

  onDelete($key) 
  {
    if (confirm('Warning : Are you sure to cancel this entry...?')) 
    {
      this._eventService.deleteEvent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

}
