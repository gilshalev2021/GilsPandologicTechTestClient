import { JobStatisticsPoint } from './job-statistics-point.model';

export interface AppState {
  readonly jobStatistics: Array<JobStatisticsPoint>;
}
