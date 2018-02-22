import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, editMenber } from '../../actions/login.js';
import './index.css';
import styles from './index.less';
import { Button , Layout, Menu, Breadcrumb, Icon, Alert, Checkbox} from 'antd';
import LoginCom from 'ant-design-pro/lib/Login';
const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginCom;

class Login extends Component {
  constructor () {
    super()
    this.state = {
      notice: '',
      type: 'tab2',
      autoLogin: true,
    }
  }
  componentWillMount () {
    console.log(this.props)
   
  }
  
  onSubmit = (err, values) => {
    console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
    if (this.state.type === 'tab1') {
      this.setState({
        notice: '',
      }, () => {
        if (!err && (values.username !== 'admin' || values.password !== '888888')) {
          setTimeout(() => {
            this.setState({
              notice: '账号或密码错误！',
            });
          }, 500);
        }
      });
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }
  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  render() {
    
   
    
    
    return  (
      <div id='login'>
        <LoginCom
        defaultActiveKey={this.state.type}
        onTabChange={this.onTabChange}
        onSubmit={this.onSubmit}
      >
        <Tab key="tab1" tab="账号密码登录">
          {
            this.state.notice &&
            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
          }
          <UserName name="username" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2" tab="手机号登录">
          <Mobile name="mobile" />
          <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
        </Tab>
        <div>
          <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
          <a style={{ float: 'right' }} href="">忘记密码</a>
        </div>
        <Submit>登录</Submit>
        <div>
          其他登录方式
          <span className="icon icon-alipay" />
          <span className="icon icon-taobao" />
          <span className="icon icon-weibo" />
          <a style={{ float: 'right' }} href="">注册账户</a>
        </div>
      </LoginCom>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.login.loading
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    editMenber:bindActionCreators(editMenber, dispatch),
  };
}
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//页面使用connect是有前提的，需要配置好redux，主要内容在Store
