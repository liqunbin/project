import React  from 'react';
import {
  Link
} from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import './index.css';
import styles from './index.less';
class Login extends React.Component {
  render() {
    return (
      <div id='login'>
        this is Login
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
    login: bindActionCreators(login, dispatch)
  };
}
// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//页面使用connect是有前提的，需要配置好redux，主要内容在Store
