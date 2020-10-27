let App = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		order_id: null,
		order: {},
		form_info: {},
		goods_code: '',
		goods_price: '',
		goods_num: 1,
		goods_key: '',

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.data.order_id = options.order_id;
		// this.getOrderDetail(options.order_id);
	},

	/**
	 * 提交订单详情
	 */
	formSubmit(e) {
		//数量处理
		e.detail.value.goods_num = 1;
		this.setData({
			form_info: e.detail.value
		})
		App._post_form(
			'order/booking',
			this.data.form_info,
			(res) => {
				console.log(res.data)
				// this.setData(res.data);
				wx.navigateTo({
					url: `../flow/checkout?goods_key=${res.data.goods_key}`
				})
			}
		);
	},

});
