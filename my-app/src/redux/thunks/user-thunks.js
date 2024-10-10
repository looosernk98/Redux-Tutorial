import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "../creators/user-action";
import axios from 'axios'

// Thunk action creator
export const fetchData = () => {
    return async (dispatch, getState) => {
      dispatch(fetchDataRequest()); //  // No-2
      // dispatch({
      //   type: FETCH_DATA_REQUEST
      // }); 
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(fetchDataSuccess(response.data));  // No-6
        // dispatch({
        //   type: FETCH_DATA_SUCCESS,
        //   payload: response.data
        // }); 
        // { type: SUCCESS, payload: data}
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
        // dispatch({
        //   type: FETCH_DATA_FAILURE,
        //   payload: error
        // });
        // dispatch -> { type: FAILURE, payload: error}
      }
    };
};
  