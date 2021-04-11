import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // MatPaginator Inputs
  pageSize = 5;
  isDisplayDOM = true;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;
  offSet: any = 1;
  pageIndex = 1;
  totalPages = 0;
  list: Array<any> = [];
  str = '';
  @Input() childMessage: string;
  @Input() pageNo: string;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private elem: ElementRef) { }

  ngOnChanges() {
    this.pageIndex = 1;
    this.paginator.pageIndex = 0;
    this.getTotalPage(this.pageSize);
    this.ngAfterViewInit();
  }

  ngOnInit() {
    this.getTotalPage(this.pageSize);
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.generateStr();
    this.list = this.elem.nativeElement.querySelectorAll('.mat-paginator-range-label');
    if (this.list[0]) {
      this.list[0].innerHTML = this.str;
    }
    this.list[0].addEventListener('input', (event: any) => {
      const wordSearch = event.target.value - 1;
      this.paginator.pageIndex = event.target.value - 1;
      setTimeout(() => {
        if (wordSearch === event.target.value - 1) {
          this.paginator.pageIndex = this.paginator.pageIndex;
          this.messageEvent.emit(this.paginator);
        }
      }, 1000);
    });
  }

  generateStr() {
    this.str = `<span class="float-left">Page</span> <input class="float-left mr-5 ml-5 customfont"  placeholder="Go to Page"
    value="` + this.pageIndex + `" required="required" /> <span class="float-left"> Of ` + this.totalPages + `</span>`;
  }

  getNext(event: PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.getTotalPage(event.pageSize);
    this.ngAfterViewInit();
    this.messageEvent.emit(event);
  }

  getTotalPage(length) {
    const pages = + this.childMessage;
    this.totalPages = Math.ceil(pages / length);
    if (this.pageIndex > this.totalPages) {
      this.totalPages = this.pageIndex;
    }
  }
}
