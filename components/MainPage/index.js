import React from 'react';
import FirstScreen from './FirstScreen';
import Headline from './Headline';
import Snapshot from './Snapshot';
import Feature from '../../shared/Feature';


const MainPage = () => (
  <div>
    <FirstScreen>
      <Headline />
      <Snapshot />
    </FirstScreen>
    <Feature
      title={'电子地图'}
      description={'南靖天地图电子地图相关特性说明，尽量占满到2至三行。'}
      imgUrl={'./imgs/dzdt.png'}
    />
    <Feature
      title={'资源中心'}
      description={'南靖天地图资源中心相关特性说明，尽量占满到2至三行。'}
      imgUrl={'./imgs/zyzx.png'}
    />
    <Feature
      title={'专题应用'}
      description={'南靖天地图专题应用相关特性说明，尽量占满到2至三行。'}
      imgUrl={'./imgs/ztyy.png'}
    />
    <Feature
      title={'应用开发'}
      description={'南靖天地图应用开发相关特性说明，尽量占满到2至三行。'}
      imgUrl={'./imgs/yykf.png'}
    />
    <Feature
      title={'互联互通'}
      description={'南靖天地图互联互通相关特性说明，尽量占满到2至三行。'}
      imgUrl={'./imgs/hlht.png'}
    />
  </div>
);


export default MainPage;
