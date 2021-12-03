import * as actions from './actions';

const callApi = async (api) => {
  return await fetch(api).then((res) => res.json());
};

// API FETCH CALL
export const fetchCall = (api) => (dispatch) => {
  dispatch({ type: actions.INITIALIZE });
  try {
    callApi(api).then((data) => {
      dispatch({
        type: actions.SUCCESS,
        payload: data,
      });
    });
  } catch (err) {
    dispatch({
      type: actions.FAILURE,
      payload: err,
    });
  }
};

// example only for refernce
// INCREMENT COUNTER BY 1
// export const incrementCount = () => ({ action: actions.INCREMENT });

// DECREMENT COUNTER BY 1
// export const decrementCount = () => ({ action: actions.DECREMENT });

// RESET COUNTER
// export const resetCount = () => ({ action: actions.RESET });
