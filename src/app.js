import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home';
import Login from './views/Login';
import './assets/baseCss.css';
import store from './store/index';
ReactDOM.render(
<Provider store={store}>
<BrowserRouter >
    <Switch>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
    </Switch>
  </BrowserRouter>
  </Provider>,document.getElementById('root'));
