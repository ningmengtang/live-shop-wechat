let App = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		goods_code: '',
		goods_price: '',
		goods_num: 1,
		goods_key: '',
		// 直播配置
		customParams: encodeURIComponent(JSON.stringify({
			path: 'pages/live/live',
			pid: 1
		})),
		live_background:''

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.data.order_id = options.order_id;
		this.goLiveBackground();
	},
	//获取直播背景
	goLiveBackground(){
		App._post_form('index/live', {}, (res) => {
			let info=res.data;
			this.setData({
				live_background:info.background
			})
		});
	},
	//直播参数
	goLive(){
		App._post_form('live/index', {}, (res) => {
			let info=res.data
			wx.navigateTo({
			    url: `plugin-private://${info.app_id}/pages/live-player-plugin?room_id=${info.room_id}&custom_params=${this.data.customParams}`
			})
		});
	}
	

});
