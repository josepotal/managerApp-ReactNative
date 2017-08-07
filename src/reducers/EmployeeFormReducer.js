import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
  employeesList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        // key interpolation ES6
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEES_FETCH_SUCCESS:
      return {

      };
    default:
      return state;
  }
};
