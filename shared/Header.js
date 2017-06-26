import React from 'react';
import { Link } from 'react-router';
import { Button, Icon } from 'antd';
import styles from './Header.less';

const pageLinks = [
  { title: '电子地图', path: '/map', icon: 'environment-o' },
  { title: '资源中心', path: '/resources', icon: 'cloud-o' },
  { title: '专题应用', path: '/thememap', icon: 'dot-chart' },
  { title: '应用开发', path: '/appdev', icon: 'appstore-o' },
  { title: '互联互通', path: '/links', icon: 'usb' }
];

class Header extends React.Component {
  constructor (props) {
    super(props);
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
            <Link to='/'>
              <img
                alt={'Head Logo'}
                src={'http://www.fjmap.net/fjmap/content/images/banner_L.png'}
              />
              <span className={styles.HeaderTitle}>
                数字南靖（公众版）
              </span>
            </Link>
          </div>
          <div className={styles.HeaderRight} >
            <div className={styles.DefaultBtnGroup}>
              <Button type="primary" ghost>登录</Button>
              <Button type="primary">注册</Button>
            </div>
            <div className={styles.Menu}>
              {
                pageLinks.map(link => (
                  <Link key={link.path} to={link.path}>
                    <button className="link-button link-button-md">
                      <div>
                        <Icon type={link.icon} />{link.title}
                      </div>
                    </button>
                  </Link>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    );
  }
}


export default Header;
