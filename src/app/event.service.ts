import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable()
export class EventService {

  constructor(private firebase: AngularFireDatabase,
    ) { }
 
  eventList: AngularFireList<any>;
  StudentList:AngularFireList<any>;

  getEvent() {
    this.eventList = this.firebase.list('Events');
    console.log(this.eventList.snapshotChanges())
    return this.eventList.snapshotChanges();
  }

  insertEvent(detail)
  {
    this.firebase.list('Events').push(detail);
  return true
  }

  insertDetail(detail)
{
  this.firebase.list('info').push(detail);
  return true
}
 
getStudents()
  { console.log("Vaibhav")
this.StudentList=this.firebase.list('info');
console.log(this.StudentList)
return this.StudentList.snapshotChanges();

  }
  deleteStudent($key: string) 
  {
    this.firebase.list('info').remove($key);
  }
  deleteEvent($key: string) 
  {
    this.firebase.list('Events').remove($key);
  }

}
