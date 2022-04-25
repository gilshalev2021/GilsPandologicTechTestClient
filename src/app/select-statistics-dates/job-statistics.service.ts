import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {JobStatisticsPoint} from "../store/models/job-statistics-point.model";

@Injectable({
  providedIn: 'root'
})
export class JobStatisticsService {

  constructor(private httpClient: HttpClient) {}

  getJobStatistics(start: string | null, end: string | null): Observable<Array<JobStatisticsPoint>> {
    const getUrl = `https://localhost:7072/api/jobStatisticsPoints?START=${start}&END=${end}`
    return this.httpClient.get<Array<JobStatisticsPoint>>(getUrl);
  }
}
