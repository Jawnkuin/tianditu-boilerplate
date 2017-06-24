import React, {PropTypes} from 'react';
import {Layout, Breadcrumb} from 'antd';
import MyHeader from './Header';
import SiderMenu from './SiderMenu';
import MapComponent from '../MapComponent';

const {Header, Content} = Layout;

const styles = {
  sider: {
    backgroundColor: '#fff',
    height: 'inherit',
    zIndex: 2
  },
  main: {
    fontSize: 16,
    margin: 'auto',
    height: 'inherit'
  },
  content: {
    height: '100%',
    width: '100%'
  },
  layout: {
    flex: 1,
    zIndex: 1,
    flexDirection: 'row',
    height: '100%'
  },
  workarea: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 24
  },
  Breadcrumb: {
    padding: 12
  },
  header: {
    backgroundColor: '#fff',
    flexBasis: 108
  },
  card: {
    height: '100%',
    width: '100%',
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    borderLeftColor: '#108ee9'
  }
};

// <MapComponent />
class Frame extends React.Component {
  static propTypes = {
    showMap: PropTypes.bool.isRequired,
    showMemu: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  }
  render () {
    return (
      <Layout style={styles.main}>
        <Header style={styles.header}>
          <MyHeader />
        </Header>
        <div
          className={'wrapper'}
          style={{display: 'flex', justifyContent: 'flex-start', width: 'inherit', height: 'inherit', margin: 0}}
        >
          {this.props.showMap && (<MapComponent className={'map'} />)}
          <Layout style={styles.layout}>
            {this.props.showMemu && (<SiderMenu style={styles.sider} />)}
            {this.props.showMap || (
              <Content style={styles.content}>
                <Layout style={styles.workarea}>
                  <Breadcrumb style={styles.Breadcrumb}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户</Breadcrumb.Item>
                    <Breadcrumb.Item>列表</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content style={styles.content}>
                    {this.props.children}
                  </Content>
                </Layout>
              </Content>
            )}
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default Frame;
