import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const getSceneStyle = () => ({
  backgroundColor: '#fff'
});

const RouterComponent = () => {
  return (
    <Router
      titleStyle={{ alignSelf: 'center' }}
      getSceneStyle={getSceneStyle}
    >
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login" initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            onLeft={() => null}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
