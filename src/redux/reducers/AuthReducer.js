import Actions from "../Types";
import Storage from "../../utils/services/storage";

const initialState = {
  isLoading: false,
  currentUser: null,
  data: {},

  error: null,
};

const reduxState = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      // return {
      //   ...state,
      //   isLoading: false,
      //   currentUser: Storage.get("user-access-token"),
      //   error: null,
      //   isAuthenticated: false,
      // };
    case Actions.USER_LOGIN_START:
      // return {
      //   ...state,
      //   isLoading: true,
      //   currentUser: null,
      //   isAuthenticated: false,
      //   error: null,
      // };
    case Actions.USER_LOGIN_SUCCESS:
      // return {
      //   ...state,
      //   isLoading: false,
      //   currentUser: action.payload,
      //   isAuthenticated: true,
      //   error: null,
      // };
   
    default:
      return state;
  }
};

export default reduxState;
