export function getComputerDetail(id){
  var data = [
    {
      id: 1,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 1, 512GB 超大内存 8G显卡 ',
      price: 1999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
    {
      id: 2,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 2, 1TB 内存 4G显卡',
      price: 2999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
    {
      id: 3,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 3, 1TB 高色域 4G显卡',
      price: 3999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
    {
      id: 4,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 4, 256GB 独立4G显卡',
      price: 4999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
    {
      id: 5,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 5, 512TB i5英特尔 8G显卡',
      price: 5999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
    {
      id: 6,
      url: require('@/assets/img/computer.jpg'),
      title:'华为HW笔记本电脑 6, 1TB i7英特尔13代 8G显卡',
      price: 6999,
      address: '浙江省宁波市北仑区XXX街道万科云汇中心1幢199'
    },
  ]
  var chooseComputer = [];
  data.forEach((item)=>{
    if(item.id == id){
      chooseComputer = item
    }
  })
  console.log(chooseComputer)
  return chooseComputer

}