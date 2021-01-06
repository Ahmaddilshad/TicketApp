import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketDetailService } from 'src/app/shared/ticket-detail.service';

@Component({
  selector: 'app-ticket-summary',
  templateUrl: './ticket-summary.component.html',
  styles: [
  ]
})
export class TicketSummaryComponent implements OnInit {
  Id: any;
  ticket:any;
  ticketId:number;

  constructor(private service: TicketDetailService,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    this.Id=this.actRoute.snapshot.paramMap.get("id");
    this.loadTicketSummary(this.Id);
    
  }

  loadTicketSummary(Id:any)
  {
    this.service.getTicketSummary(Id).subscribe(tckt=>{
      this.ticket=tckt;
    });
  }



}
