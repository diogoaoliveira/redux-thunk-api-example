import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_PENDING,
  FETCH_DATA_ERROR,
} from './types';
import Api from '../services/api';

export const fetchDataPending = () => {
  return {
    type: FETCH_DATA_PENDING,
  };
};

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = error => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

export const fetchData = () => dispatch => {
  dispatch(fetchDataPending());
  Api.get('/repos')
    .then(res => {
      dispatch(fetchDataSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchDataError(error.message));
    });
};
