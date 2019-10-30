var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,

    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  makeRequest() {
    wx.request({
      // url: 'https://easy-mock.com/mock/5c3c2ce0de22053ce38a84de/vivi/list?size=1&currentPage=10',
      // url: 'http://192.168.5.208:8080/singleMuseum/wkDynamic/list',
      // url: 'http://jx.tj720.com/mip/new/mobile/curation/getCurationList.do',
      url: 'http://bjmuseum.org.cn/admin/Guide/getMuseumList.do',
      data:{
        // currentPage: 1,
        // size: 10
      },
      method:'GET',
      // header: {
      //   'content-type': 'application/json'
      //   'content-type': 'json'
      // },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});