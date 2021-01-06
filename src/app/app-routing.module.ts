import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailFormComponent } from './ticket-details/ticket-detail-form/ticket-detail-form.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
//import { TicketSummaryComponent } from './ticket-details/ticket-summary/ticket-summary.component';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

