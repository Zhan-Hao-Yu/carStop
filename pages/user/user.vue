<template>
	<view>
		<div class="user-topContent">
      <div class="user-title">
        <div class="user-middle">
          
        </div>

        <div class="user-hd">
          
        </div>
      </div>
      <div class="user-userMassage">
				<!-- for循环循环div -->
        <div class="yt" v-for="item in threeArr" :key='item.name'>
          <!-- 参照以下item设置 -->
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
        topTitle:"智慧停车",
        threeArr:[{name:'积分',num:2 },{name:'优惠券',num:3 },{name:'钱包',num:2 }]// 变量
			
			};
		}
	}
</script>

<style lang="scss">
  .user-topContent{ 
    width: 100%;
    height: 13rem;
    border: 1px solid red;
  } 
  .user-title{
    height: 3rem;
    border: 1px solid blue;
    margin-top: 5rem; 
    display: flex;//弹性盒布局
     .user-middle{
      height:3rem;
      width: 4rem ;
      margin-left: 2.1872rem;
      border: 1px solid green;
    }
    .user-hd{
      height: 3rem;
      width: 6rem;
      margin-left:1rem;
      border: 1px solid green;
    }
  }
  
  .user-userMassage{
    height: 3rem;
    border: 1px solid black;
    margin-top: 1.625rem;
    display: flex;// 弹性盒布局
    justify-content: space-around;//around 按空间均匀分配留旁白
    text-align: center;
    .yt{
      height: 3rem;
      width: 7.125rem;
      border: 1px solid pink;//边框
    }
  }
  
 
 
</style>
