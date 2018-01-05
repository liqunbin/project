import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';

ReactDOM.render(<BrowserRouter >
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </BrowserRouter>,document.getElementById('root'));
