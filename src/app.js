import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
  // Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home';
import Login from './views/Login';
import MarkDown from './views/MarkDown';
import MarkDown2 from './views/MarkDown2';
import MarkDown3 from './views/MarkDown3';
import MarkDown4 from './views/MarkDown4';
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
        <Route path='/markdown' component={MarkDown} />
        <Route path='/markdown2' component={MarkDown2} />
        <Route path='/markdown3' component={MarkDown3} />
        <Route path='/markdown4' component={MarkDown4} />
        <Redirect to="/"  />{/*路由匹配不到的重定向，指向"/" 路径*/}
        
  </Switch> 
</Router>
  </Provider>,document.getElementById('root'));
