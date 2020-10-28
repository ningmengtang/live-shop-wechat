let App = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		images: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getInfo();
	},

	/**
	 * 提交订单详情
	 */
	getInfo(e) {
		App._post_form(
			'index/about', {},
			(res) => {
				let info = res.data
				console.log(info.images)
				this.setData({
					images: info.images
				})
				wx.setNavigationBarTitle({
					title: info.title
				})
			}
		);
	},

});
