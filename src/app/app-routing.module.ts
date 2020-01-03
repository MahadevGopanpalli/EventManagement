import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import {FormComponent} from './form/form.component';
import { EditComponent } from './edit/edit.component';
import { DelEventComponent } from './special-events/del-event/del-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path:'del',
    component:DelEventComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },{
    path: 'edit',
    component: EditComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
