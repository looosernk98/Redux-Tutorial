import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../creators/user-action";

// reducers.js
const initialState = {
    data: null,
    isLoading: false,
    error: null,
    // isvalidUser: false,
};

  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, isLoading: true}; // // No-4
      case FETCH_DATA_SUCCESS:
        return { ...state, data: action.payload, isLoading: false }; // No-8
      case FETCH_DATA_FAILURE:
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  
  export default userReducer;