import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import { MatSliderModule } from '@angular/material/slider';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatTableModule } from '@angular/material/table';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    LoaderComponent, PaginatorComponent, DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSliderModule,
    MatPaginatorModule,
    MatDatepickerModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent,
    PaginatorComponent,
    DateRangePickerComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    CKEditorModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDatepickerModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [SharedService, DatePipe],
  entryComponents: []
})
export class SharedModule { }
