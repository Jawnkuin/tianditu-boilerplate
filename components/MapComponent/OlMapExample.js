import React, { Component } from 'react';
import Map from 'ol/map'; // 使用module的方式引入map以及view等控件
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

// 通过DOM变量初始化OpenLayers
const createMap = ele => new Map({
  controls: [],
  target: ele,
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [13277606, 3009008],
    zoom: 16
  })
});

class ExampleMap extends Component {
  componentDidMount () {
    const mapdiv = this.mapDiv;
    createMap(mapdiv);
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
