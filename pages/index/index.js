let App = getApp();

Page({
	data: {
		// banner轮播组件属性
		indicatorDots: true, // 是否显示面板指示点	
		autoplay: true, // 是否自动切换
		interval: 3000, // 自动切换时间间隔
		duration: 800, // 滑动动画时长
		imgHeights: {}, // 图片的高度
		imgCurrent: {}, // 当前banne所在滑块指针
		// 页面元素
		items: {},
		newest: {},
		best: {},
		scrollTop: 0,
		// 直播配置
		roomId: [4],
		customParams: encodeURIComponent(JSON.stringify({
			path: 'pages/index/index',
			pid: 1
		})),
		info: [],
	},

	onLoad() {
		// 设置页面标题
		App.setTitle();
		// 设置navbar标题、颜色
		App.setNavigationBar();
		// 获取首页数据
		this.getIndexData();
	},
	//启动的生命周期
	onShow() {

	},
	/**
	 * 获取首页数据
	 */
	getIndexData() {
		App._post_form('index/home', {}, (res) => {
			this.setData({
				info: res.data
			});
		});
	},

	/**
	 * 计算图片高度
	 */
	imagesHeight: function(e) {
		let imgId = e.target.dataset.id,
			itemKey = e.target.dataset.itemKey,
			ratio = e.detail.width / e.detail.height, // 宽高比
			viewHeight = 750 / ratio, // 计算的高度值
			imgHeights = this.data.imgHeights;

		// 把每一张图片的对应的高度记录到数组里
		if (typeof imgHeights[itemKey] === 'undefined') {
			imgHeights[itemKey] = {};
		}
		imgHeights[itemKey][imgId] = viewHeight;
		// 第一种方式
		let imgCurrent = this.data.imgCurrent;
		if (typeof imgCurrent[itemKey] === 'undefined') {
			imgCurrent[itemKey] = Object.keys(this.data.items[itemKey].data)[0];
		}
		this.setData({
			imgHeights,
			imgCurrent
		});
	},


	onShareAppMessage: function() {
		return {
			title: "小程序首页",
			desc: "",
			path: "/pages/index/index"
		};
	},

});
