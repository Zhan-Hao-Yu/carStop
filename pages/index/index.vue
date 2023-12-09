<template>
	<view class="content">
		<map id="mapId" style="width: 100vw; height:calc(100vh);" scale="12" :latitude="latitude" :longitude="longitude"  :show-location="true" :markers="markers"></map>
		<!-- @markertap="tapMarkert" -->
	</view>
</template>

<script>
	var bmap = require('../../static/bmap-wx.min');//bmap-wx.js文件存放路径
	var wxMarkerData = []; 

	export default {
		data() {
			return {
				BMap: null,
				searchKeyword: '',
				markers: [], 
				latitude: 30.24709986422286, 
				longitude: 120.2090000813704, 
				rgcData: {} 
			}
		},
		components:{},
		onLoad() {
			this.BMap = new bmap.BMapWX({ 
           		ak: 'MFoIrvxM1Tp7TVNlXvfaM82Qc5bPoeUI' //百度地图密钥
			}); 
			this.toSearch("杭州")  //这里填写一个位置
		},
		handleInputChange: function (e) {
			this.searchKeyword = e.detail.value
		},
		methods: {
			search: function () {
        		this.toSearch(this.searchKeyword)
			},
			toSearch: function (keyword) {
				// 请求失败回调
				let fail = function(data) { 
					console.log(data)
				};
				// 请求成功回调
				let success = function(data) { 
					wxMarkerData = data.wxMarkerData; 
					this.markers= wxMarkerData 
					this.latitude= wxMarkerData[0].latitude 
					this.longitude= wxMarkerData[0].longitude 
				} 
				// 发起geocoding检索请求 
				this.BMap.geocoding({ 
					address: keyword, 
					fail: fail, 
					success: success, 
					iconPath: 'static/image/navbar/master.png', 
					iconTapPath: 'static/image/navbar/master.png' 
				}); 
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
</style>
