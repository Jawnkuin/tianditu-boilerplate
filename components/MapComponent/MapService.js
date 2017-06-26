import Map from 'ol/map'; // 使用module的方式引入map以及view等控件
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';

const initConfigs = {
  controls: [],
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
      })
    }),
    new TileLayer({
      source: new XYZ({
        url: 'http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
      })
    })
  ],
  view: new View({
    center: [13277606, 3009008],
    zoom: 16
  })
};

// 通过DOM变量初始化OpenLayers
const createMap = ele => new Map(Object.assign({ target: ele }, initConfigs));


const services = {};
services.map = null;
services.registerMap = (mapDiv) => {
  services.map = createMap(mapDiv);
};

export default () => services;
