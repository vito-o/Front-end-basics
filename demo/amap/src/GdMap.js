

class GdMap {
  mapData = [
    { areaCode: '620100000000', areaName: '兰州市' },
  ]

  //默认参数
  _options = {
    el: 'map',
    lonlat: [103.88326, 36.055031],
    map: null, //map对象
    loca: null, //loca对象
    mask: [],   //遮掩路径
    bounds: [], 

    areaCode: '620100000000'
  }


  constructor(options) {
    Object.assign(this._options, options);
    if(!this.self) {
      GdMap.self = this;
    }
    this.init();
  }

  async init() {
    //地图数据查询
    await this.searchAreaInfo({areaCode: this._options.areaCode});
    //加载底图
    this.loadBaseMap();
    //创建 Loca 实例
    this.loadLoca();

    //添加标记
    this.addMarker({ position: this._options.lonlat })

    //添加呼吸点
    this.scatterLayer({ position: this._options.lonlat })

    //矢量图形
    this.addPolygonLayer({ position: this._options.lonlat })

    setTimeout(() => {
      //启用动画开关（不触发该方法，动画不执行）
      this._options.loca.animate.start();
      this.Animate.surround.call(this)
    }, 2000);
  }

  /**
   * 通过行政区划查询区域边界信息
   * @param { areaCode }  
   * @returns 
   */
  searchAreaInfo({areaCode}) {
    let name = this.mapData.find(o => o.areaCode == areaCode)?.areaName;

    //利用行政区查询获取边界构建mask路径
    let district = new AMap.DistrictSearch({
      subdistrict: 0,
      extensions: 'all',
      level: 'city'
    });

    return new Promise((resolve) => {
      district.search(name, (status, result) => {
        this._options.bounds = result.districtList[0].boundaries;
        this._options.mask = this._options.bounds.map(o => [o])
        resolve(true)
      })
    })
  }

  /**
   * 加载底图
   */
  loadBaseMap() {
    this._options.map = new AMap.Map(this._options.el, {
      mask: this._options.mask,
      rotateEnable: true,
      pitchEnable: true,
      center: this._options.lonlat,
      viewMode: '3D',//使用3D视图
      showBuildingBlock: false,
      showIndoorMap: false,
      showLabel: true,
      zoom: 17,//级别
      pitch: 50,
      rotation: -15,
      zooms: [2,20],
      mapStyle: 'amap://styles/grey',
    });

    this.addMapBounds();
    this.addBuildingLayer();
  }

  /**
   * 创建 Loca 实例
   */
  loadLoca() {
    let loca = this._options.loca = new Loca.Container({
      map: this._options.map
    });

    loca.ambLight = {
      intensity: 2.2,
      color: '#babedc',
    };
    loca.dirLight = {
      intensity: 0.46,
      color: '#d4d4d4',
      target: [0, 0, 0],
      position: [0, -1, 1],
    };
  }

  //添加地图描边
  addMapBounds() {
    for(let bound of this._options.bounds) {
      new AMap.Polyline({
        path: bound,
        strokeColor:'#99ffff',
        strokeWeight:4,
        map: this._options.map
      })
    }
  }
  
  //添加地图建筑图层
  addBuildingLayer() {
    let buildingLayer = new AMap.Buildings({
      heightFactor: 4,
      wallColor: '#011d40',
      roofColor: '#114a82',
      zIndex: 130,
    });
    this._options.map.addLayer(buildingLayer);
  }

  //添加标记
  addMarker({ position }) {
    let marker = new AMap.Marker({
      icon: "./src/site-1.png",
      position: position,
      offset: new AMap.Pixel(-25, -110)
    });
    marker.setMap(this._options.map);
  }

  //添加呼吸点
  scatterLayer({ position } = {}) { 
    var geoLevelE = new Loca.GeoJSONSource({
      // data: [],
      url: './src/sz_road_E.json',
    });
    let scatterLayer = new Loca.ScatterLayer({
      loca: this._options.loca,
      zIndex: 112,
      opacity: 1,
      visible: true,
      zooms: [2, 22],
    });
    scatterLayer.setSource(geoLevelE);
    scatterLayer.setStyle({
      unit: 'meter',
      size: [100, 100],
      borderWidth: 0,
      texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
      duration: 500,
      animate: true,
    });
  }

  //矢量图形
  addPolygonLayer({ position, color = '#00B2D5' }){
    let dis = 0.002;
    let pos = [
      [this.Utils.offsetPos(position[0], -dis), this.Utils.offsetPos(position[1],  dis)],
      [this.Utils.offsetPos(position[0],  dis), this.Utils.offsetPos(position[1],  dis)],
      [this.Utils.offsetPos(position[0],  dis), this.Utils.offsetPos(position[1], -dis)],
      [this.Utils.offsetPos(position[0], -dis), this.Utils.offsetPos(position[1], -dis)],
    ]
    new AMap.Polygon({
      bubble: true,
      fillOpacity: 0.4,
      fillColor: color,
      strokeWeight:1,
      path: pos,
      map: this._options.map
    });
  }

  //动画方法
  Animate = {
    //动画参数
    options: {
      speed: 1
    },
    //环绕动画
    surround({ cb } = {}) {
      this._options.loca.viewControl.addAnimates(
        [{ 
          pitch: {
            value: 50,
            control: [[0, 40], [1, 50]],
            timing: [0.3, 0, 1, 1],
            duration: 7000 / this.Animate.options.speed,
          },
          rotation: {
            value: 260,
            control: [[0, -80], [1, 260]],
            timing: [0, 0, 0.7, 1],
            duration: 7000 / this.Animate.options.speed,
          },
          zoom: {
            value: 17,
            control: [[0.3, 16], [1, 17]],
            timing: [0.3, 0, 0.9, 1],
            duration: 5000 / this.Animate.options.speed,
          },
        }],  
        //回调函数
        () => {
          if(typeof cb == 'function') {
            cb();
          }
        }
      );
    },
    //移动动画
    move({ startPos, endPos, cb } = {}) {
      GdMap.self._options.loca.viewControl.addAnimates(
        [{ 
          center: {
            control: startPos || GdMap.self._options.lonlat,
            value: endPos,
            timing: [0.3, 0, 0.7, 1],
            duration: 2000 / GdMap.self.Animate.options.speed,
          },
        }],  
        //回调函数
        () => {
          if(typeof cb == 'function') {
            cb();
          }
        }
      );
    },
  }

  //工具方法
  Utils = {
    /**
     * 偏移经/纬度
     * @param {*} pos 经纬度中一个
     * @param {*} dis 偏移距离
     * @returns number
     */
    offsetPos(pos, dis = 0) {
      return (pos + dis).toFixed(5) - 0;
    },
    /**
     * 通过点击获取点击位置的经纬度
     */
    getPosition(){
      this._options.map.on('click', function(ev) {
        // 触发事件的地理坐标，AMap.LngLat 类型
        var lnglat = ev.lnglat;
        console.log(lnglat, 'lnglat')
      });
    }
  }
}

let map = new GdMap();