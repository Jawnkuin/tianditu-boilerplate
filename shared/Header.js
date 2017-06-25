import React from 'react';
import { Button, Icon } from 'antd';
import styles from './Header.less';

class Header extends React.Component {
  constructor () {
    super();
    this.state = { scrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll (e) {
    const value = document.body.scrollTop;
    const scrolled = value > 50;
    if (this.state.scrolled !== scrolled) {
      this.setState({ scrolled });
    }
    e.stopPropagation();
  }

  render () {
    const scrolled = this.state.scrolled;
    return (
      <div
        className={[styles.HeaderWrapper, scrolled ? styles.HeaderScrolled : ''].join(' ')}
      >
        <div className={styles.Header}>
          <div className={styles.HeaderLeft}>
            <img
              alt={'Head Logo'}
              src={'http://www.fjmap.net/fjmap/content/images/banner_L.png'}
            />
            <span className={styles.HeaderTitle}>
        数字南靖（公众版）
      </span>
          </div>
          <div className={styles.HeaderRight} >
            <div className={styles.DefaultBtnGroup}>
              <Button type="primary" ghost>登录</Button>
              <Button type="primary">注册</Button>
            </div>
            <div className={styles.Menu}>
              <button className="link-button link-button-md">
                <div>
                  <Icon type="environment-o" />电子地图
            </div>
              </button>
              <button className="link-button link-button-md">
                <div>
                  <Icon type="cloud-o" />资源中心
            </div>
              </button>
              <button className="link-button link-button-md">
                <div>
                  <Icon type="dot-chart" />专题应用
            </div>
              </button>
              <button className="link-button link-button-md">
                <div>
                  <Icon type="appstore-o" />应用开发
            </div>
              </button>
              <button className="link-button link-button-md">
                <div>
                  <Icon type="usb" />互联互通
            </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default Header;
