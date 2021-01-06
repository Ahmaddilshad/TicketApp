import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { TicketDetail } from './ticket-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketDetailService {
  constructor(private http: HttpClient) {}

  formData: TicketDetail = new TicketDetail();
  list: TicketDetail[];
  readonly baseURL = 'http://localhost:50518/api/CreateTicket';
  readonly secbaseURL = 'http://localhost:50518/api/Identity';
  //data:any =localStorage.getItem("key");
 // user=JSON.parse(this.data);
  //Id : string=this.user.userId;
  userid:string=localStorage.getItem('key')  || '{}';
  

  postTicketDetails()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  
  putTicketDetails()
  {
    return this.http.put(`${this.baseURL}/${this.formData.ticketId}`,this.formData);
  }
  
  deleteTicketDetails(Id:number)
  {
    return this.http.delete(`${this.baseURL}/${Id}`);
  }
  
  refreshList()
  {
    this.http.get(`${this.secbaseURL}/${this.userid}`)
    .toPromise()
    .then(res=> this.list= res as TicketDetail[]);
  
  }
  
  getTicketSummary(Id:number)
  {
    return this.http.get(`http://localhost:50518/api/CreateTicket/${Id}`);
    
  }
  
  }
   