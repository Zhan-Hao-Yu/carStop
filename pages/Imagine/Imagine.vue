<template>
	<view>
    <div class="topContent">
      <div class="imagine-title">

      </div>
      <div class="imagine-userInfo">
          <div class="userInfoItem" v-for="item in userInfo" :key="item.num">
            {{item.name}}
          </div>
      </div>
    </div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        userInfo:[{name:'积分',num:1245},{name:'优惠券',num:3},{name:'钱包',num:247}]
			};
		},
    methods:{
    }
	}
</script>

<style lang="scss">
  .topContent{
    border: 1px solid red;
    height: 13.44rem;
    width: 100%;
    .imagine-title{
      height: 3rem;
      margin-top: 4rem;
      border: 1px solid blue;
    }
    .imagine-userInfo{
      height: 3rem;
      margin-top: 2rem;
      padding: 0 1rem;
      border: 1px solid black;
      display: flex;
      justify-content: space-between;
      .userInfoItem{
        border: 1px solid greenyellow;
        width: 6rem;
        height: 3rem;
      }
    }
  }
</style>
