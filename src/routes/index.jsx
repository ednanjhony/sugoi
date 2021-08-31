import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import { Animes } from '../Pages/Animes';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/animes" component={Animes} />
  </Switch>
)

export default Routes;