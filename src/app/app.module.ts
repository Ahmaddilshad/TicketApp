import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketDetailFormComponent } from './ticket-details/ticket-detail-form/ticket-detail-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TicketSummaryComponent } from './ticket-details/ticket-summary/ticket-summary.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { SignupDetailsComponent } from './signup-details/signup-details.component';

const routes = [
  { path: 'app-ticket-details', component: TicketDetailsComponent },
  {
    path: 'app-ticket-detail-form',
    component: TicketDetailFormComponent},
  { path: 'app-ticket-summary/:id', component:TicketSummaryComponent},
  { path:'', component: LoginDetailsComponent},
  { path: 'app-signup-details', component:SignupDetailsComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    TicketDetailFormComponent,
    TicketSummaryComponent,
    LoginDetailsComponent,
    SignupDetailsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)],
  
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
