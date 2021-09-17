import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { RtfComponent } from './rtf/rtf.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { UtdfComponent } from './utdf/utdf.component';

const routes: Routes = [
  {path:"",component:Task1Component}, //default Routing
  {path:"task1",component:Task1Component},
  {path:"task2",component:Task2Component},   //naming routine
  {path:"pipes",component:PipesComponent},
  {path:"pipes/:id",component:PipesComponent}, //parameterized routine
  // {path:"pipes",redirectTo:"parent",pathMatch:"full"}, //Redirect Routing
  {path:"crud",loadChildren:()=>import('./crud/crud.module').then(m=>m.CrudModule)},
  {path:"parent",component:ParentComponent},
  {path:"angularForm",component:AngularFormComponent,children:[
    {path:"",component:UtdfComponent},
    {path:"utdf",component:UtdfComponent},
    {path:"rtf",component:RtfComponent}
  ]},
  {path:"**",component:PageNotFoundComponent} //wildcard Routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
