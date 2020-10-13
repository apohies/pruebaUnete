import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Principal from './Principal';
import Testeo from './testeo';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
           <Route path='/testeo' component={Testeo} />
      </Switch>
    );
  }
}

export default Routes;
