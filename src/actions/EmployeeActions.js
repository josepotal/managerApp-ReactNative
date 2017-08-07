import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
 } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  const userId = currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList();
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  const userId = currentUser.uid;
  return (dispatch) => {
  firebase.database().ref(`/users/${userId}/employees`)
    .on('value', snapshot => {
      dispatch({
        type: EMPLOYEES_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};
