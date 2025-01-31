import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../shared/user-detail.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.component.html',
  styles: [],
})
export class SignupDetailsComponent implements OnInit {
  form: any;
  constructor(
    public service: UserDetailService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.signup().subscribe(
      (res) => {
        console.log(form)
        this.resetForm(form);
        this.router.navigate(['']);
        this.toastr.success(
          'SignedUp Successfully',
          'Ticket Detail Register',
          {
            closeButton: true,
            disableTimeOut: false,
            positionClass: 'toast-center-center',
          }
        );
        
      },
      (err) => {
        console.log(err);
        this.toastr.error('SignedUp Failed', 'Ticket Detail Register', {
          closeButton: true,
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
