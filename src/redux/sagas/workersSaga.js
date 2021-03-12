import { put, call, takeEvery } from 'redux-saga/effects';
import { getEmployees, getWorklog } from '../../api';

const getWorkers = () => 
    getEmployees()
        .then((data) => data)
        .catch((error) => {
            throw error;
        })

const getWorklogs = () => 
    getWorklog()
        .then((data) => data)
        .catch((error) => {
        throw error;
     })



function* fetchWorkers() {
    try {
       const employees = yield call(getWorkers);
       yield put({ type: 'GET_EMPLOYEES_SUCCESS', payload: employees });
    } catch (error) {
       yield put({ type: 'WORKERS_FAILED', message: error.message });
    }
}

function* fetchWorkLog() {
    try {
       const worklog = yield call(getWorklogs);
       yield put({ type: 'GET_WORKTIME_SUCCESS', payload: worklog });
    } catch (error) {
       yield put({ type: 'WORKERS_FAILED', message: error.message });
    }
}

function* fetchWorkersSaga() {
    yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchWorkers);
}

function* fetchWorkLogSaga() {
    yield takeEvery('GET_WORKTIME_REQUESTED', fetchWorkLog);
}

export { fetchWorkersSaga, fetchWorkLogSaga };