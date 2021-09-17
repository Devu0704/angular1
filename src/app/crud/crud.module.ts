import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { CrudRoutingModule } from './crud-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AddComponent, EditComponent, DashboardComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule
  ]
})
export class CrudModule { }
