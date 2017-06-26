import React from 'react';
import { Input } from 'antd';
import styles from './ThematicContent.less';
import ProductCard from '../../shared/ProductCard';

const Search = Input.Search;

const ThematicContent = () => (
  <div className={styles.ThematicContent}>
    <div id={'contentTitle'} className='flex-box'>
      <h2>专题应用</h2>
      <Search
        placeholder="搜索专题"
        style={{ width: 200 }}
        onSearch={value => console.log(value)}
      />
    </div>
    <div id='contentItems' className='flex-box'>
      <ProductCard
        title={'“多规合一”业务协同平台'}
        description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。靖天地图天地图应用应用开发相关特性说明，尽量占满到2至三行.靖天地图应用开发相关特性说明，尽量占满到2至三行'}
        imgUrl={'/imgs/yykf.png'}
      />
      <ProductCard
        title={'“多规合一”业务协同平台'}
        description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。靖天地图天地图应用应用开发相关特性说明，尽量占满到2至三行.靖天地图应用开发相关特性说明，尽量占满到2至三行'}
        imgUrl={'/imgs/yykf.png'}
      />
      <ProductCard
        title={'“多规合一”业务协同平台'}
        description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。靖天地图天地图应用应用开发相关特性说明，尽量占满到2至三行.靖天地图应用开发相关特性说明，尽量占满到2至三行'}
        imgUrl={'/imgs/yykf.png'}
      />
      <ProductCard
        title={'“多规合一”业务协同平台'}
        description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。靖天地图天地图应用应用开发相关特性说明，尽量占满到2至三行.靖天地图应用开发相关特性说明，尽量占满到2至三行'}
        imgUrl={'/imgs/yykf.png'}
      />
      <ProductCard
        title={'“多规合一”业务协同平台'}
        description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。靖天地图天地图应用应用开发相关特性说明，尽量占满到2至三行.靖天地图应用开发相关特性说明，尽量占满到2至三行'}
        imgUrl={'/imgs/yykf.png'}
      />
    </div>
    <div className={styles.addMore}>
      <button className={'link-button'}>
        <div>
          加载更多...
        </div>
      </button>
    </div>

  </div>
);


export default ThematicContent;

