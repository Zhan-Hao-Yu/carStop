<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  view{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		overflow: hidden;
  }
  div{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		overflow: hidden;
  }
  page {
		/*这里一定要设置，否则小程序会有问题 */
		width: auto;
		padding: 1rem 0;
		box-sizing: border-box;
		background-color: white;
	}

</style>
