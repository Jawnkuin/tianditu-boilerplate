import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './Header.less';

const Header = ({ scrolled }) => (
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
      </div>
    </div>
  </div>
);

Header.propTypes = {
  scrolled: PropTypes.bool.isRequired
};

export default Header;
