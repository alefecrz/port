import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Site from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Site}></Route>
      </Switch>
    </BrowserRouter>
  );
}
