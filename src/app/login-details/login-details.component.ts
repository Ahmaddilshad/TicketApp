import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../shared/user-detail.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UserDetailService } from '../shared/user-detail.service';


@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styles: [],
})
export class LoginDetailsComponent implements OnInit {
  form: any;
  constructor(
    public service: UserDetailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res) => {
        this.resetForm(form);

        this.toastr.success(
          'Loggedin Successfully',
          'Ticket Detail Register')
         // {
            
          //  disableTimeOut: false,
           // positionClass: 'toast-center-center',
         // }
        
        this.router.navigate(['app-ticket-details']);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Login Failed', 'Ticket Detail Register', {
          
          disableTimeOut: false,
          positionClass: 'toast-center-center',
        });
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserDetail();
  }
}
