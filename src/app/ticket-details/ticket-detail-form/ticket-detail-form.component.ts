import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketDetail } from 'src/app/shared/ticket-detail.model';
import { TicketDetailService } from 'src/app/shared/ticket-detail.service';

@Component({
  selector: 'app-ticket-detail-form',
  templateUrl: './ticket-detail-form.component.html',
  
})
export class TicketDetailFormComponent implements OnInit {
  form:any;
  userid:string=localStorage.getItem('key')||'{}' ;
  //data:any =localStorage.getItem("key");
  //user=JSON.parse(this.data);
  //Id=this.user.userId;
  
  constructor(
    public service: TicketDetailService,   
    private router: Router,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm)
  {    
      if(this.service.formData.ticketId===0)
      {this.service.formData.userId=this.userid;
        this.insertTicketDetails(form); 
        this.router.navigate(['app-ticket-details'])
      }
      else
        this.updateTicketDetails(form);
     this.router.navigate(['']);
  }
  
  insertTicketDetails(form:NgForm)
  {
    this.service.postTicketDetails().subscribe(
      res=>{console.log(form)
            this.resetForm(form);
            this.service.refreshList();
            this.toastr.success('Ticket Created successfully','Ticket Register')
            this.router.navigate(['app-ticket-details'])
      },
      err => {console.log(err);}
    );
  }
  
  updateTicketDetails(form:NgForm)
  {
    this.service.putTicketDetails().subscribe(
      res=>{
            this.resetForm(form);
            this.service.refreshList();
            this.toastr.info('Ticket updated successfully','Ticket Register')
      },
      err => {console.log(err);}
    );
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new TicketDetail();
  }
  
  }
  