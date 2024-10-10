// Action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


// export const GET_USER_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const GET_USER_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const GET_USER_DATA_FAILURE = 'FETCH_DATA_FAILURE';


// Action creators is a function that returns an object to be dipatched that contains type of action and payload
  export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST // No-3
  });
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS, // No-7
    payload: data
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
  });
