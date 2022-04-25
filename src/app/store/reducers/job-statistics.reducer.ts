import {JobStatisticsPoint} from '../models/job-statistics-point.model';
import {JobStatisticsAction, JobStatisticsActionType} from '../actions/job-statistics.action';

const initialState: Array<JobStatisticsPoint> = [];

export function JobStatisticsReducer(state: Array<JobStatisticsPoint> = initialState, action: JobStatisticsAction) {
  switch (action.type) {
    case JobStatisticsActionType.GET_JOB_STATISTICS:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
