"use strict";
var common_vendor = require("../../common/vendor.js");
var bmap = require("../../static/bmap-wx.min");
var wxMarkerData = [];
const _sfc_main = {
  data() {
    return {
      BMap: null,
      searchKeyword: "",
      markers: [],
      latitude: 30.24709986422286,
      longitude: 120.2090000813704,
      rgcData: {}
    };
  },
  components: {},
  onLoad() {
    this.BMap = new bmap.BMapWX({
      ak: "MFoIrvxM1Tp7TVNlXvfaM82Qc5bPoeUI"
    });
    this.toSearch("\u676D\u5DDE");
  },
  handleInputChange: function(e) {
    this.searchKeyword = e.detail.value;
  },
  methods: {
    search: function() {
      this.toSearch(this.searchKeyword);
    },
    toSearch: function(keyword) {
      let fail = function(data) {
        console.log(data);
      };
      let success = function(data) {
        wxMarkerData = data.wxMarkerData;
        this.markers = wxMarkerData;
        this.latitude = wxMarkerData[0].latitude;
        this.longitude = wxMarkerData[0].longitude;
      };
      this.BMap.geocoding({
        address: keyword,
        fail,
        success,
        iconPath: "static/image/navbar/master.png",
        iconTapPath: "static/image/navbar/master.png"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.latitude,
    b: $data.longitude,
    c: $data.markers
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Program Files/feiq/Recv Files/uniapp/carStop/carStop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
