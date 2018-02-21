import { Component } from '@angular/core';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TimerComponent } from './timer/timer';
import { TasksComponent, TaskEditorComponent} from './tasks/tasks';
//import {TaskEditorComponent } from './tasks/task-editor.component'
import {CheckHashComponent} from './check-hash/checkhash';
import {CheckInputComponent} from './check-input/checkinput';

@Component({
  selector: 'pomodoro-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
  
  template: '<router-outlet></router-outlet>'
})
/*
@RouteConfig([
  { path: '',               name: 'Home',                 redirectTo: ['TasksComponent'] },
  { path: 'tasks',          name: 'TasksComponent',       component: TasksComponent, useAsDefault: true },
  { path: 'tasks/editor',   name: 'TaskEditorComponent',  component: TaskEditorComponent },
  { path: 'timer/...',      name: 'TimerComponent',       component: TimerComponent }
])
*/

@RouteConfig([
  { path: '',               name: 'Home',                 redirectTo: ['CheckHashComponent'] },
  { path: 'checkhash',      name: 'CheckHashComponent',   component: CheckHashComponent, useAsDefault: true },
  { path: 'tasks',          name: 'TasksComponent',       component: TasksComponent},
  { path: 'checkinput',     name: 'CheckInputComponent',  component: CheckInputComponent }
])

export default class AppComponent {}
