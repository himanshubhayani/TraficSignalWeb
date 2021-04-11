import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/commonService/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Signup } from './signup.model';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userId: number;
  isRememberMe: boolean;
  signupModal: Signup = new Signup();
  userList = [];
  isLoader = false;
  error: any;
  displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'Password', 'Action'];
  constructor(
    private router: Router,
    private commonService: CommonService,
    private signupService: SignupService) { }

  ngOnInit() {
    this.getAllUser();
  }

  create() {
    this.isLoader = true;
    this.signupModal.IsActive = true;
    this.signupService.create(this.signupModal).subscribe((res: any) => {
      this.signupModal = new Signup();
      this.getAllUser();
      this.isLoader = false;
      // this.router.navigate(['./global-configuration']);
    }, (err: HttpErrorResponse) => {
      this.error = err.error.errorCase;
      this.isLoader = false;
    });

  }
  getAllUser() {
    this.signupService.getAllUser().subscribe((res: any) => {
      this.userList = res.Model;
      this.isLoader = false;
      // this.router.navigate(['./global-configuration']);
    }, (err: HttpErrorResponse) => {
      this.isLoader = false;
    });
  }
  edit(user:any){
    this.signupModal.Id=user.Id;
    this.signupModal.FirstName=user.FirstName;
    this.signupModal.LastName=user.LastName;
    this.signupModal.Email=user.Email;
    this.signupModal.Password=user.Password;
    this.signupModal.IsActive=true
  }
  detete(user:any){
    this.isLoader = true;
    this.signupModal.Id=user.Id;
    this.signupModal.FirstName=user.FirstName;
    this.signupModal.LastName=user.LastName;
    this.signupModal.Email=user.Email;
    this.signupModal.Password=user.Password;
    this.signupModal.IsActive = false;
    this.signupService.create(this.signupModal).subscribe((res: any) => {
      this.signupModal = new Signup();
      this.getAllUser();
      this.isLoader = false;
      // this.router.navigate(['./global-configuration']);
    }, (err: HttpErrorResponse) => {
      this.error = err.error.errorCase;
      this.isLoader = false;
    });
  }
}

