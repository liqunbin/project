import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/login.js';
import './index.css';
import styles from './index.less';
import { Button } from 'antd';
class Login extends Component {
  constructor () {
    super()
    // this.state = {
    //     activeKey: '0',
    //         user: {},
    //         menu: [],
    //         popVisible: false,
    //         status:'0'
    // }
  }
  componentWillMount () {
    console.log(this.props,this.props.loading)
   
  }
  onClick(){
    console.log(this.props)
    this.props.login()
  }
  render() {
    console.log('kkk',this.props)
    return (
      <div id='login'>
        this is Login

      <Button onClick={this.onClick.bind(this)}>Login</Button>
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
  console.log('atction',bindActionCreators)
  return {
    login: bindActionCreators(login, dispatch)
  };
}
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//页面使用connect是有前提的，需要配置好redux，主要内容在Store
