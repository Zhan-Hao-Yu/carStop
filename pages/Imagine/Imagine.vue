<template>
	<view>
    <div class="topContent">
      <div class="imagine-title">
				<uni-icons type="person" size="30"></uni-icons>
				<span class="titleName">{{title}}</span>
      </div>
      <div class="imagine-userInfo">
          <div class="userInfoItem" v-for="item in userInfo" :key="item.num">
            <p>{{item.num}}</p> 
            <p>{{item.name}}</p> 
          </div>
      </div>
    </div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'智慧停车',
        userInfo:[{name:'积分',num:1245},{name:'优惠券',num:3},{name:'钱包',num:247}]
			};
		},
    methods:{
    }
	}
</script>

<style lang="scss">
  .topContent{
		background-image: linear-gradient(181.2deg, rgb(181, 239, 249) 10.5%, rgb(254, 254, 254) 86.8%);
    height: 13.44rem;
    width: 100%;
    .imagine-title{
      height: 3rem;
      margin-top: 4rem;
			.uni-icons{
				margin: 0 1rem;
			}
			.titleName{
				font-size: 2rem;
			}
    }
    .imagine-userInfo{
      height: 3rem;
      margin-top: 2rem;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      .userInfoItem{
        width: 6rem;
        height: 3rem;
				text-align: center;
      }
    }
  }
</style>
