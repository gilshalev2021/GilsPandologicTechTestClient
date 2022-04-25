import {Component, OnInit} from '@angular/core';
import {ChartType} from "angular-google-charts";
import {Observable} from "rxjs";
import {JobStatisticsPoint} from "../store/models/job-statistics-point.model";
import {Store} from "@ngrx/store";
import {AppState} from "../store/models/app-state.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-job-statistics-chart',
  templateUrl: './job-statistics-chart.component.html',
  styleUrls: ['./job-statistics-chart.component.css']
})
export class JobStatisticsChartComponent implements OnInit {
  showChart = false;
  title = 'Cumulative job views vs. predictions';
  type:ChartType = ChartType.ComboChart;
  jobStatisticsPoints$: Observable<Array<JobStatisticsPoint>>;
  data : Array<any> = [];
  columns = ['Days', 'Active jobs', 'Cumulative job views','Cumulative predicted job views' ];
  options = {
    hAxis: {
      title: 'Day'
    },
    vAxis:{
      title: 'Job views'
    },
    legend: { position: 'bottom' },
    pointSize: 10,
    series: {
      0: {type: 'bars', color:'lightGrey'},//active jobs
      1: {type: 'line', color:'#96c03b'}, // cumulative job views
      2: {type: 'line', color:'#47b4cd', lineDashStyle: [2, 2]}, //cumulative predicted job views
    },
    selectionMode: 'multiple',
    tooltip: { trigger: 'focused', showColorCode: true },
    aggregationTarget: 'auto',
    focusTarget: 'category',
  };

  constructor(private store: Store<AppState>, public datePipe: DatePipe) {
    this.jobStatisticsPoints$ = this.store.select('jobStatistics');
  }

  ngOnInit(): void {
    this.jobStatisticsPoints$.subscribe((res: Array<JobStatisticsPoint>) => {
      if (res) {
        this.data = new Array<any>();
        this.showChart = true;
        if(res.length ===0){
          this.showChart = false;
        }
        res.forEach((item) => {
          this.data.push([this.datePipe.transform(item.dayDate, 'dd-MM'), item.activeJobs, item.cumulativeJobViews, item.cumulativePredictedJobView]);
        });
      }
    }, error => {
      console.log(error);
    });
  }
}
