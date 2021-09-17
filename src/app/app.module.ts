import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { PipesComponent } from './pipes/pipes.component';
import { MypipePipe } from './shared/customPipe/mypipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    PipesComponent,
    MypipePipe,
    ParentComponent,
    ChildComponent,
    NavComponent,
    AngularFormComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
