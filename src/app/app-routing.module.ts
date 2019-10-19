import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {MainComponent} from './main/main.component';
import {ListTodosComponent} from './list-todos/list-todos.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'main/:name', component: MainComponent},
  {path: 'todos', component: ListTodosComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
