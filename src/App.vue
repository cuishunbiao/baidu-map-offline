<template>
  <div id="app">
    <div ref="mapBox" id="mapBox" class="main-center-box"></div>
  </div>
</template>
<script>
import { mapConfig } from "@/status/js/map-config";
//mapConfig 作用域名属于当前文件，window.mapConfig 作用域名属于全局
window.mapConfig = mapConfig;
import("@/status/js/AreaRestriction_min");
//加载百度地图
let baiduMap = import("@/status/js/baidu_map_offline_3.0.js");
import gcoord from 'gcoord';//坐标系转换

export default {
  name: "App",
  data() {
    this.map = "";
    this.icon_hospital = require("@/status/images/icon_hospital.png");
    this.icon_car = require("@/status/images/icon_car.png");
    return {
      ZOOM: 12,
    }
  },
  created() {

  },
  methods: {
    //执行百度地图
    createMapFn() {
      this.map = new BMap.Map("mapBox", {
        minZoom: 11, //地图最小级别
        maxZoom: 15 //地图最大级别 -> 暂定15, 上线时可设转成 16-17
      });
      //设置工具（放大缩小按钮）
      this.addControlFn();
      //设置边界
      this.setMapBoundsFn();
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      //注册放大缩小监听事件，全局共用
      this.map.addEventListener("zoomend", this.mapZoomFn);
      //创建坐标
      this.createHospitalFn();
    },
    //地图当前的放大级别
    mapZoomFn(e) {
      this.ZOOM = e.target.Va;
    },
    //创建医院坐标
    createHospitalFn() {
      //创建医院
      this.hospitalPoint = new BMap.Point(116.404053, 39.914548);
      var myIcon = new BMap.Icon(this.icon_hospital, new BMap.Size(13, 13));
      // 创建标注
      var hospitalMarker = new BMap.Marker(this.hospitalPoint, {
        icon: myIcon,
        enableMassClear: false
      });
      this.map.addOverlay(hospitalMarker);
      //重新设置中心点
      this.setMapCenterAndZoomFn(116.404053, 39.914548);
    },
    //设置百度地图中心点
    setMapCenterAndZoomFn(pointX, pointY) {
      var point = new BMap.Point(pointX, pointY);
      this.map.centerAndZoom(point, this.ZOOM);
    },
    //设置地图回弹边界
    setMapBoundsFn() {
      let mapBounds = new BMap.Bounds(
        new BMap.Point(115.228365, 39.328177),
        new BMap.Point(117.746311, 41.320766)
      );
      try {
        BMapLib.AreaRestriction.setBounds(this.map, mapBounds);
      } catch (e) {
        console.log(e);
      }
    },
    //设置工具（放大缩小按钮）
    addControlFn() {
      this.map.addControl(
        new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })
      ); // 左上角，添加比例尺
      this.map.addControl(new BMap.NavigationControl());
    },
    //坐标转换
    potinChangeFn(x, y) {
      return gcoord.transform([x, y],
        gcoord.WGS84,               // 当前坐标系
        gcoord.BD09                 // 目标坐标系
      );
    }
  },
  mounted() {
    //等地图加载完后去创建事件
    baiduMap.then(() => {
      this.createMapFn();
    });
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#mapBox {
  width: 100%;
  height: 100%;
}
</style>
