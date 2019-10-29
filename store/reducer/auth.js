import { LOGIN, SIGNUP } from '../action/auth';
const initialState = {
  token: null,
  userID: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        token: action.token,
        userID: action.userId
      };

    case LOGIN:
      return {
        token: action.token,
        userID: action.userId
      };
    default:
      return state;
  }
};
