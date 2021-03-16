import { lastNameSort } from '../../helpers/helpers';
import {
    GET_EMPLOYEES_REQUESTED,
    GET_EMPLOYEES_SUCCESS,
    GET_WORKTIME_REQUESTED,
    GET_WORKTIME_SUCCESS,
    WORKERS_FAILED
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    employees: [],
    worklog: [],
    error: null
};

export default function workersReducer(state = initialState, action) {

    switch (action.type) {
        case GET_EMPLOYEES_REQUESTED:
            return {...state};
        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: [...state.employees, ...lastNameSort(action.payload)]
            };
        case GET_WORKTIME_REQUESTED:
            return {...state};
        case GET_WORKTIME_SUCCESS:
            return {
                ...state,
                loading: false,
                worklog: [...state.worklog, ...action.payload]
            };
        case WORKERS_FAILED:
            return { 
                ...state,
                loading: false, 
                error: action.message
            };
    
        default:
            return state;
    }    
};