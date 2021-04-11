import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/commonService/common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitterService } from '../commonService/event-emiter.service';
import { GlobalConfigurationService } from '../Global Configuration/globalconfiguration.service';
import { TrafficAnalyzerService } from './trafficanalyzer.service';
@Component({
  selector: 'analyzer',
  templateUrl: './trafficanalyzer.component.html',
  styleUrls: ['./trafficanalyzer.component.css']
})
export class TrafficAnalyzerComponent implements OnInit {
  time: number = 0;
  staticTime: number;
  NextOpen: string;
  CurrentOpen: string;
  DirectionNumber: number;
  configurationData: any;
  Direction: string;

  A = true; B = false; C = false; D = false; AA = false; AB = false; AC = false; AD = false;
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private analyzeService: TrafficAnalyzerService, private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.getConfigurationData();
  }
  getConfigurationData() {
    this.analyzeService.GetConfigDataByUserId(+this.commonService.getLoginUserId()).subscribe((response: any) => {
      this.configurationData = response.Model;
      this.DirectionNumber = this.configurationData.Direction;
      if (this.configurationData.Direction == 1) {
        this.Direction = "Clockwise";
        this.NextOpen = "B";
        this.CurrentOpen="A";
      }
      if (this.configurationData.Direction == 2) { 
        this.Direction = "Anti Clock wise"; 
        this.NextOpen = "D";
        this.CurrentOpen="A";
      }
      if (this.configurationData.Direction == 3)
      {
        this.Direction = "Up & Down";
        this.NextOpen = "C";
        this.CurrentOpen="A";
      } 
      if (this.configurationData.Direction == 4) {
        this.Direction = "Left & Right";
        this.D = true;
        this.A = false;
        this.NextOpen = 'B';
        this.CurrentOpen="D";
      }
      this.staticTime = this.configurationData.TimeInterval;
      setInterval(() => {
        this.time = this.time + 1;
        if (this.time == this.staticTime + 1) {
          this.time = 0;
          if (this.configurationData.Direction == 1) {
            if (this.A) {
              this.B = true;
              this.A = false;
              this.CurrentOpen="B";
              this.NextOpen = 'C';
              return;
            }
            if (this.B) {
              this.C = true;
              this.B = false;
              this.CurrentOpen="C";
              this.NextOpen = 'D';
              return;
            }
            if (this.C) {
              this.D = true;
              this.C = false;
              this.CurrentOpen="D";
              this.NextOpen = 'A';
              return;
            }
            if (this.D) {
              this.A = true;
              this.D = false;
              this.CurrentOpen="A";
              this.NextOpen = 'B';
              return;
            }
          }
          if (this.configurationData.Direction == 2) {
            if (this.A) {
              this.D = true;
              this.A = false;
              this.CurrentOpen="D";
              this.NextOpen = 'C';
              return;
            }
            if (this.B) {
              this.A = true;
              this.B = false;
              this.NextOpen = 'D';
              this.CurrentOpen="A";
              return;
            }
            if (this.C) {
              this.B = true;
              this.C = false;
              this.NextOpen = 'A';
              this.CurrentOpen="B";
              return;
            }
            if (this.D) {
              this.C = true;
              this.D = false;
              this.NextOpen = 'B';
              this.CurrentOpen="C";
              return;
            }
          }
          if (this.configurationData.Direction == 3) {
            if (this.A) {
              this.C = true;
              this.A = false;
              this.NextOpen = 'A';
              this.CurrentOpen="C";
              return;
            }
            if (this.C) {
              this.A = true;
              this.C = false;
              this.NextOpen = 'C';
              this.CurrentOpen="A";
              return;
            }
          }
          if (this.configurationData.Direction == 4) {
            if (this.D) {
              this.B = true;
              this.D = false;
              this.NextOpen = 'D';
              this.CurrentOpen="B";
              return;
            }
            if (this.B) {
              this.D = true;
              this.B = false;
              this.NextOpen = 'B';
              this.CurrentOpen="D";
              return;
            }
          }
        }
      }, 1000);
    }, (err: HttpErrorResponse) => {
    });
  }

  ImergencyAA() {
    this.CurrentOpen="AA";
    this.time = 0;
    this.AA = true;
    this.A = false; this.B = false; this.C = false; this.D = false; this.AB = false; this.AC = false; this.AD = false;
    setTimeout(() => {
      this.AA = false;
      if (this.DirectionNumber == 4) this.D = true;
      else this.A = true
    }, 1000 * this.staticTime);
  }
  ImergencyAB() {
    this.CurrentOpen="AB";
    this.time = 0;
    this.AB = true;
    this.A = false; this.B = false; this.C = false; this.D = false; this.AA = false; this.AC = false; this.AD = false;
    setTimeout(() => {
      this.AB = false;
      if (this.DirectionNumber == 4) this.D = true;
      else this.A = true
    }, 1000 * this.staticTime);
  }
  ImergencyAC() {
    this.CurrentOpen="AC";
    this.time = 0;
    this.AC = true;
    this.A = false; this.B = false; this.C = false; this.D = false; this.AB = false; this.AA = false; this.AD = false;
    setTimeout(() => {
      this.AC = false;
      if (this.DirectionNumber == 4) this.D = true;
      else this.A = true
    }, 1000 * this.staticTime);
  }
  ImergencyAD() {
    this.CurrentOpen="AD";
    this.time = 0;
    this.AD = true;
    this.A = false; this.B = false; this.C = false; this.D = false; this.AB = false; this.AC = false; this.AA = false;
    setTimeout(() => {
      this.AD = false;
      if (this.DirectionNumber == 4) this.D = true;
      else this.A = true
    }, 1000 * this.staticTime);
  }
}

