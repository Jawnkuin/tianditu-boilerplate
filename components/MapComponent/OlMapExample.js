import React, { Component } from 'react';
import getMapService from './MapService';


class ExampleMap extends Component {
  componentDidMount () {
    getMapService().registerMap(this.mapDiv);
  }


  // 使用ref的回调函数将整个div DOM的值绑定到mapDiv变量上
  render () {
    return (
      <div
        style={{ position: 'fixed', zIndex: 1, height: 'inherit', width: '100%' }}
        ref={(e) => { this.mapDiv = e; }}
      />
    );
  }
}

export default ExampleMap;
