"use strict";
var bmap = require("../static/bmap-wx.min");
var wxMarkerData = [];
Page({
  data: {
    BMap: null,
    searchKeyword: "",
    markers: [],
    latitude: "",
    longitude: "",
    rgcData: {}
  },
  onLoad: function() {
    this.data.BMap = new bmap.BMapWX({
      ak: "eCCCLKMrBnYYj5bPFyo8B6kyzkqZk2fv"
    });
    this.toSearch("\u676D\u5DDE");
  },
  handleInputChange: function(e) {
    this.data.searchKeyword = e.detail.value;
  },
  search: function() {
    this.toSearch(this.data.searchKeyword);
  },
  toSearch: function(keyword) {
    let that = this;
    let fail = function(data) {
      console.log(data);
    };
    let success = function(data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    };
    that.data.BMap.geocoding({
      address: keyword,
      fail,
      success
    });
  }
});
