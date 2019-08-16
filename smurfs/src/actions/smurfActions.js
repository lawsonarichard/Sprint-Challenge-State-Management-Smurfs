import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({
          type: FETCH_SMURF_DATA_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_SMURF_DATA_FAILURE,
          payload: err.response
        });
      });
  };
};

export const addSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: ADD_SMURF_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_SMURF_FAILURE,
          payload: err.response
        });
      });
  };
};
