import {
    getWorkers,
    getWorkersSuccess,
    getWorkTime,
    getWorkTimeSuccess,
    workersFailed,
} from '../actions/workersActions';
import { getEmployees, getWorklog } from '../../api';

export const getWorkersThunk = (data) => {
    return (dispatch) => { 
        dispatch(getWorkers(data));
        getEmployees()
            .then((responce) => {
                dispatch(getWorkersSuccess(responce))})
            .catch((error) => {
                dispatch(workersFailed(error))
            })
    };
};

export const getTimeThunk = (data) => {
    return (dispatch) => { 
        dispatch(getWorkTime(data));
        getWorklog()
            .then((responce) => {
                dispatch(getWorkTimeSuccess(responce))})
            .catch((error) => {
                dispatch(workersFailed(error))
            })
    };
};

