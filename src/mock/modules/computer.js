function computerList(res) {
  return {
    code: 200,
    data: [
      {
        id: 1,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 1, 512GB 超大内存 8G显卡 ',
        price: 1999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
      {
        id: 2,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 2, 1TB 内存 4G显卡',
        price: 2999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
      {
        id: 3,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 3, 1TB 高色域 4G显卡',
        price: 3999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
      {
        id: 4,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 4, 256GB 独立4G显卡',
        price: 4999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
      {
        id: 5,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 5, 512TB i5英特尔 8G显卡',
        price: 5999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
      {
        id: 6,
        url: require('@/assets/img/computer.jpg'),
        title: '华为HW笔记本电脑 6, 1TB i7英特尔13代 8G显卡',
        price: 6999,
        address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
      },
    ]
  }
};

function computerTable() {
  return {
    code: 200,
    data:
      [ {
        id: 'huawei',
        date: '2011-04-02',
        computerName: '华为',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 'xiaomi',
        date: '2003-01-09',
        computerName: '小米',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 'huipu',
        date: '2016-05-02',
        computerName: '惠普',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 'lianxiang',
        date: '2022-12-11',
        computerName: '联想',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 'daier',
        date: '2024-02-12',
        computerName: '戴尔',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 'pingguo',
        date: '2019-07-28',
        computerName: '苹果',
        address: '上海市普陀区金沙江路 1518 弄'
      } ]

  }
}
export default { computerList, computerTable }