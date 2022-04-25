import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SelectStatisticsDatesComponent } from './select-statistics-dates/select-statistics-dates.component';
import { JobStatisticsChartComponent } from './job-statistics-chart/job-statistics-chart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { JobStatisticsReducer } from './store/reducers/job-statistics.reducer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SelectStatisticsDatesComponent,
    JobStatisticsChartComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    StoreModule.forRoot({ jobStatistics: JobStatisticsReducer } as ActionReducerMap<any,any>),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
