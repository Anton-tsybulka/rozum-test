import {
    GET_EMPLOYEES_REQUESTED,
    GET_EMPLOYEES_SUCCESS,
    GET_WORKTIME_REQUESTED,
    GET_WORKTIME_SUCCESS,
    WORKERS_FAILED,
} from './actionTypes';

export const getWorkers = (data) => {
    return {
        type: GET_EMPLOYEES_REQUESTED,
        payload: data,
    };
};

export const getWorkersSuccess = (data) => {
    return {
        type: GET_EMPLOYEES_SUCCESS, 
        payload: data
    };
};

export const getWorkTime = (data) => {
    return {
        type: GET_WORKTIME_REQUESTED,
        payload: data,
    };
};

export const getWorkTimeSuccess = (data) => {
    return { 
        type: GET_WORKTIME_SUCCESS, 
        payload: data 
    };
};

export const workersFailed = (data) => {
    return { 
        type: WORKERS_FAILED, 
        payload: data 
    };
};