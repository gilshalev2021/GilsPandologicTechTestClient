import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppState} from "../store/models/app-state.model";
import {Store} from "@ngrx/store";
import {JobStatisticsService} from "./job-statistics.service";
import {JobStatisticsPoint} from "../store/models/job-statistics-point.model";
import {GetJobStatisticsAction} from "../store/actions/job-statistics.action";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-select-statistics-dates',
  templateUrl: './select-statistics-dates.component.html',
  styleUrls: ['./select-statistics-dates.component.css']
})
export class SelectStatisticsDatesComponent {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private store: Store<AppState>, private jobStatisticsService :JobStatisticsService,private datePipe: DatePipe) {
  }

  loadStatistics() {
    console.log(this.range.value);
    const dateFormat = "yyyy-MM-dd";
    const end = this.datePipe.transform(this.range.value.end, dateFormat);
    const start = this.datePipe.transform(this.range.value.start, dateFormat);
    this.jobStatisticsService.getJobStatistics(start, end).subscribe((res: Array<JobStatisticsPoint>) => {
      this.store.dispatch(new GetJobStatisticsAction(res));
    }, error => {
      console.log(error);
    });
  }
}
