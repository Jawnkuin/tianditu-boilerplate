import React from 'react';
import { Icon, Carousel, Card } from 'antd';
import { Link } from 'react-router';
// import PropTypes from 'prop-types';
import styles from './Headline.less';

const Headline = () => (
  <div className={styles.Headline}>
    <div className={styles.HeadText}>
      <h1>数字南靖</h1>
      <span>创新地理信息服务</span>
      <span>助力智慧南靖建设</span>
      <Link to="/map">
        <button className="link-button">
          <div>
            <Icon type="search" />体验数字南靖
          </div>
        </button>
      </Link>
    </div>
    <div className={styles.ThemeMap}>
      <Carousel autoplay={false} style={{ overflow: 'hidden' }}>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
        >
          <div className="custom-image">
            <img alt="example" width="100%" src="http://map.xmtfj.gov.cn/Portal/preview?reqtype=getAppPreview&appid=379" />
          </div>
          <div className="custom-card">
            <h3>南靖市国土资源综合监管系统</h3>
            <p>以图管地，社会监督，提升国土资源监管的质量和效率</p>
          </div>
        </Card>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
        >
          <div className="custom-image">
            <img alt="example" width="100%" src="http://map.xmtfj.gov.cn/Portal/preview?reqtype=getAppPreview&appid=380" />
          </div>
          <div className="custom-card">
            <h3>南靖市“多规合一”业务协同平台</h3>
            <p>实现 “三规”相关部门间信息共享与交换</p>
          </div>
        </Card>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
        >
          <div className="custom-image">
            <img alt="example" width="100%" src="http://map.xmtfj.gov.cn/Portal/preview?reqtype=getAppPreview&appid=380" />
          </div>
          <div className="custom-card">
            <h3>南靖市数字城建档案管理信息系统</h3>
            <p>数字档案的直观表达与有效管理</p>
          </div>
        </Card>
        <Card
          bodyStyle={{ padding: 0 }}
          bordered={false}
        >
          <div className="custom-image">
            <img alt="example" width="100%" src="http://map.xmtfj.gov.cn/Portal/preview?reqtype=getAppPreview&appid=380" />
          </div>
          <div className="custom-card">
            <h3>南靖水利局GIS系统</h3>
            <p>台风路径信息、水情信息、雨情信息、沿海风情信息</p>
          </div>
        </Card>
      </Carousel>

    </div>
  </div>
);


export default Headline;
