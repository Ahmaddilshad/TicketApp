import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TicketDetail } from '../shared/ticket-detail.model';
import { TicketDetailService } from '../shared/ticket-detail.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styles: [],
})
export class TicketDetailsComponent implements OnInit {
  constructor(
    public service: TicketDetailService,
    private toastr: ToastrService,
    private router:Router,
    public actRoute:ActivatedRoute
   ) {}
  ngOnInit(): void {
    this.service.refreshList();
  }


  populateForm(selectedTicketDetail:TicketDetail)
  {
    this.service.formData=Object.assign({},selectedTicketDetail);
  }
  
  onDelete(Id: number)
  {
    if(confirm('Are you sure you want to delete the ticket?'))
    {
    this.service.deleteTicketDetails(Id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully","Ticket Register")
      },
      err=>{console.log(err)}
    )
    }
  }
  
 
}