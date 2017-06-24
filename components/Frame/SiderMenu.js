import React from 'react';
import {Menu, Icon, Tooltip, Layout} from 'antd';


const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline'
    };
    this.toggle = (collapsed) => {
      this.setState({
        collapsed: !this.state.collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };
  }
  render () {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.toggle}
        breakpoint="lg"
        collapsedWidth="60"
      >
        <Menu
          mode={this.state.mode}
          defaultSelectedKeys={['sub1']}
        >
          <SubMenu
            key="sub1"
            title={this.state.collapsed ?
              (<span><Tooltip title='用户' ><span><Icon type="user" /></span></Tooltip></span>) :
              (
                <span>
                  <Icon type="user" />
                  <span className="nav-text">用户</span>
                </span>
              )
            }
          >
            <Menu.Item key="1">Tom</Menu.Item>
            <Menu.Item key="2">Bill</Menu.Item>
            <Menu.Item key="3">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={this.state.collapsed ?
              (<span><Tooltip title='角色' ><span><Icon type="team" /></span></Tooltip></span>) :
              (
                <span>
                  <Icon type="team" />
                  <span className="nav-text">角色</span>
                </span>
              )
            }
          >
            <Menu.Item key="4">Team 1</Menu.Item>
            <Menu.Item key="5">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            {this.state.collapsed ?
              (<span><Tooltip title='资源' ><span><Icon type="file" /></span></Tooltip></span>) :
              (
                <span>
                  <Icon type="file" />
                  <span className="nav-text">资源</span>
                </span>
              )
            }
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default SiderMenu;
