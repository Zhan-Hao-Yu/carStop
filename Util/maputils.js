// map.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../static/bmap-wx.min');//bmap-wx.js文件存放路径

var wxMarkerData = []; 
Page({ 
    data: {
        BMap: null,
        searchKeyword: '',
        markers: [], 
        latitude: '', 
        longitude: '', 
        rgcData: {} 
    }, 
    onLoad: function() { 
        // 新建百度地图对象 
        this.data.BMap = new bmap.BMapWX({ 
            ak: 'eCCCLKMrBnYYj5bPFyo8B6kyzkqZk2fv' //百度地图密钥
        }); 
        this.toSearch("杭州")  //这里填写一个位置
    },
    handleInputChange: function (e) {
      this.data.searchKeyword = e.detail.value
    },
    search: function () {
        this.toSearch(this.data.searchKeyword)
    },
    toSearch: function (keyword) {
        let that = this;
        let fail = function(data) { 
            console.log(data)
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
        } 
        // 发起geocoding检索请求 
        that.data.BMap.geocoding({ 
            address: keyword, 
            fail: fail, 
            success: success, 
            // iconPath: '../../img/marker_red.png', 
            // iconTapPath: '../../img/marker_red.png' 
        }); 
    }
})