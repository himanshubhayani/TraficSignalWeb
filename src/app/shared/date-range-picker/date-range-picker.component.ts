import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
class DateRange {
  startDate: any;
  endDate: any;
}
@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {

  @Output() dateRange = new EventEmitter<any>();
  @Input() columnName: string;
  @Input() selectedDateRange: DateRange;
  range: DateRange = new DateRange();
  selectedDates: any;
  constructor(public datepipe: DatePipe) {
    this.selectedDateRange = new DateRange();
  }

  ngOnInit() { }

  ngOnChanges() {
    this.selectedDates = { 'begin': new Date(this.selectedDateRange.startDate), 'end': new Date(this.selectedDateRange.endDate) }
  }

  EndDateChange(event: any) {
    this.range.startDate = new Date(event.value.begin).toString();
    this.range.endDate = new Date(event.value.end).toString();
    this.range.startDate = this.datepipe.transform(this.range.startDate, 'yyyy-MM-dd');
    this.range.endDate = this.datepipe.transform(this.range.endDate, 'yyyy-MM-dd');
    this.EmitDateRange(this.range);
  }

  EmitDateRange(dateRange: any) {
    this.dateRange.emit(dateRange);
  }

  clear() {
    this.selectedDates = '';
    this.range.startDate = '';
    this.range.endDate = '';
    this.EmitDateRange(this.range);
  }
}
