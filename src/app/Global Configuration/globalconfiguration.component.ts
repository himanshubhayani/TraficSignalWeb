import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalConfigurationService } from './globalconfiguration.service';
import { Configuration } from './globalconfiguration.model';
import { CommonService } from '../commonService/common.service';
import { Router } from '@angular/router';
@Component({
    selector: 'global',
    templateUrl: './globalconfiguration.component.html',
    styleUrls: ['./globalconfiguration.component.scss']
})
export class GlobalConfigurationComponent implements OnInit {
    selection:number;
    time:number;
    newConfiguration=new Configuration();
    constructor(private router: Router,
        private configureService: GlobalConfigurationService,
        private commonService: CommonService, private cdr: ChangeDetectorRef) {
    };

    ngOnInit() {
        
    }
    save(){
        this.newConfiguration.UserId= +this.commonService.getLoginUserId();
         this.configureService.SaveConfig(this.newConfiguration).subscribe((response: any) => {
             this.newConfiguration=new Configuration();
             this.router.navigate(['./analyzer']);
         }, (err: HttpErrorResponse) => {
         });
    }
    Selection(event){
        
    }
}