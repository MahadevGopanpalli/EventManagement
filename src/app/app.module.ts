
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventService } from './event.service';

import { environment } from '../environments/environment.prod';
import { FormComponent } from './form/form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { EditComponent } from './edit/edit.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DelEventComponent } from './special-events/del-event/del-event.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    FormComponent,
    EditComponent,
    DelEventComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  ],
  providers: [EventService,LoginComponent] ,

  bootstrap: [AppComponent]
})
export class AppModule { }
