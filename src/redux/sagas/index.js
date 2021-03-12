import { all } from 'redux-saga/effects';
import { fetchWorkersSaga, fetchWorkLogSaga } from './workersSaga';

export default function* rootSaga() {
   yield all([
      fetchWorkersSaga(),
      fetchWorkLogSaga()
   ]);
}