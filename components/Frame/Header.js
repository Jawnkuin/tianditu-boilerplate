import React from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import Styles from './Header.less';

const userMenu = (
  <Menu className={Styles.userMenu}>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
      >
        <Icon type="home" /> 主页
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
      >
        <Icon type="logout" /> 退出
      </a>
    </Menu.Item>
  </Menu>
);

class MyHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drawerWidth: '200',
      open: true
    };
  }
  // className="ant-dropdown-link"
  render () {
    return (
      <div className={Styles.headerContent}>
        <div className={Styles.upper}>
          <h1 className={Styles.title}>以地控税</h1>
          <Dropdown overlay={userMenu}>
            <a className='ant-dropdown-link'>
              <Icon type="user" /> <span>管理员</span>
            </a>
          </Dropdown>
        </div>
        <div className={Styles.lower}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" />运维管理
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default MyHeader;
