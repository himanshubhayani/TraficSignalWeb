import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonService } from 'src/app/commonService/common.service';
import { Login } from './login.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: number;
  isRememberMe: boolean;
  loginModal: Login = new Login();
  isLoader = false;
  error: any;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  submit() {
    this.isLoader = true;
    this.loginService.login('token', this.loginModal).subscribe((res: any) => {
      this.commonService.setLoginUserDetail(res);
      this.isLoader = false;
      this.router.navigate(['./global-configuration']);
    }, (err: HttpErrorResponse) => {
      this.error=err.error.errorCase;
      this.isLoader = false;
    });

  }
}

