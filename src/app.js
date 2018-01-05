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
import './assets/baseCss.css';
ReactDOM.render(<BrowserRouter >
    <Switch>
      <Route path="/" component={Login}/>
      <Route path="/login" component={Home}/>
    </Switch>
  </BrowserRouter>,document.getElementById('root'));
