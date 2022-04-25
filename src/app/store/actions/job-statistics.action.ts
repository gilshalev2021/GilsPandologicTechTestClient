import { Action } from '@ngrx/store';
import { JobStatisticsPoint } from '../models/job-statistics-point.model';

export enum JobStatisticsActionType {
  GET_JOB_STATISTICS = 'Get Job Statistics',
}

export class GetJobStatisticsAction implements Action {
  readonly type = JobStatisticsActionType.GET_JOB_STATISTICS;
  constructor(public payload: Array<JobStatisticsPoint>) {}
}

export type JobStatisticsAction = GetJobStatisticsAction;
