import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Finish from './pages/Finish';

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Main} path="/points" />
      <Route component={Finish} path="/finish" />
    </BrowserRouter>
  );
}

export default Routes;