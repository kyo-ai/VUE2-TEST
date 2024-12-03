<template>
  <div>
    <div class="nav">列表</div>
    <div class="container">
      <div class="pic" v-for="item in list" :key="item.id">
        <img :src="item.url" alt="">
        <div class="title">{{ item.title }}</div>
        <el-button type="info" class="btn" @click="toDetail(item.id)">查看详情</el-button>
      </div>
      <!-- 假元素，填充因弹性布局产生的空白区域，防止零头模块居中 -->
      <div class="pic empty" v-for=" num in emptyList"></div>
    </div>
    
  </div>
</template>

<script>
import { getComputerList } from '@/api/product.js';
export default {
  data(){
    return{
      list : [],
      emptyList: 0,
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    getList(){
      getComputerList().then((res)=>{
        if( res.code === 200 ){
          this.list = res.data;
          this.emptyList = 0;
          if( res.data.length < 10 ){
            this.emptyList = (10 - res.data.length)
          }
        }
      })
    },
    toDetail(id){
      //模拟植入跳转的id
      localStorage.setItem('mock-id',id)
      this.$router.push({
        path:`/layouts/detail-A/${id}`,
        //路由中已经配置，无需重复传值
        /* params:{
          mockId: id
        } */
      })
    },
    
  }
}
</script>

<style lang="less" scoped>
.empty {
  visibility: hidden;
}
.nav {
  color: #FFF;
  padding: 5px 10px;
}
.container{
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  .pic{
    width: 220px;
    height: 220px;
    background-color: #FFF;
    padding: 10px 10px 5px 10px;
    margin: 8px 10px;
    border-radius: 5px;
    img {
      width: 220px;height: 150px;
      border-radius: 5px;
    }
  }
  .title {
    font-size: 13px;
    text-align: center;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
  }
  .btn {
    width: 220px;
    padding: 10px 10px;
  }
}


</style>