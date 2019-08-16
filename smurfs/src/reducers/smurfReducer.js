import {
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_FAILURE,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
  addSmurf: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case DELETE_SMURF:
      return {
        ...state,
        deleteSmurf: true,
        error: null
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deleteSmurf: false
      };
    default:
      return state;
  }
};
