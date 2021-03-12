import {
    GET_EMPLOYEES_REQUESTED,
    GET_WORKTIME_REQUESTED,
} from './actionTypes';

export const getWorkers = (data) => {
    return {
        type: GET_EMPLOYEES_REQUESTED,
        payload: data,
    };
};

export const getWorkTime = (data) => {
    return {
        type: GET_WORKTIME_REQUESTED,
        payload: data,
    };
};