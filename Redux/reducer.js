import { combineReducers } from 'redux';
import * as actions from './actions';

// INITIAL STATE
const initialState = {
  fetchedData: null,
  loading: false,
  error: null,
};

// API REDUCER
const apiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.INITIALIZE:
      return {
        ...initialState,
        loading: true,
      };
    case actions.SUCCESS:
      return {
        ...initialState,
        fetchedData: payload,
      };
    case actions.FAILURE:
      return {
        ...initialState,
        error: payload,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  apiResp: apiReducer,
};

export default combineReducers(reducers);
