import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  // Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home';
import Login from './views/Login';
import NotFind from './views/Notfined';
import createHistory from 'history/createBrowserHistory';
import './assets/baseCss.css';
import store from './store/index';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();
ReactDOM.render(
<Provider store={store}>
<Router>
  <Switch>
        <Route exact path='/' component={Login} />{/*exact 匹配完全相等的路径*/}
        <Route path='/home' component={Home} />
        
  </Switch> 
</Router>
  </Provider>,document.getElementById('root'));
