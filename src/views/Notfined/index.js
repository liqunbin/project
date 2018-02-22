import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import Login from '../Login';
import Exception from 'ant-design-pro/lib/Exception';

class NotFind extends React.Component {
  render() {
    return (
      <div>
        <Exception type="404" />
      </div>
    );
  }
}
export default NotFind;
