import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/commonService/common.service';
import { HeaderService } from './header.service';
import { EventEmitterService } from 'src/app/commonService/event-emiter.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: number;
  userId: string;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private headerService: HeaderService, private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.userId = this.commonService.getLoginUserId();
  }
  LogOut(){
    this.commonService.logout(this.userId);
  }
  Analyzer(){
    this.router.navigate(['./analyzer']);
  }
  Configuration(){
    this.router.navigate(['./global-configuration']);
  }
}

