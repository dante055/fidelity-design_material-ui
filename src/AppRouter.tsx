import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Services,
  CustomSoftware,
  MobileApps,
  Websites,
  Revolution,
  Estimate,
  About,
  Contact,
  Error404,
} from './components/pages';

function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/custom-software' component={CustomSoftware} />
      <Route exact path='/mobile-apps' component={MobileApps} />
      <Route exact path='/websites' component={Websites} />
      <Route exact path='/revolution' component={Revolution} />
      <Route exact path='/estimate' component={Estimate} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route path='*' component={Error404} />
    </Switch>
  );
}

export default AppRouter;
