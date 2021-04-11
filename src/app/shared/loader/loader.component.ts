import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from 'src/app/commonService/common.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnChanges {

  @Input() isLoading: string;
  @Input() diameter: string;
  @Input() blocking: boolean = false;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  // isLoading: Subject<boolean>;

  constructor(private loaderService: CommonService) {
    // this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.isLoading = this.isLoading;
  }

}
