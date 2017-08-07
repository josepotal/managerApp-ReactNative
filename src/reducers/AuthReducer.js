import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload.uid
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication failed.',
        password: '',
        loading: false
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      };
    default:
      return state;
  }
};
