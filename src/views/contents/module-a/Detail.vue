<template>
  <div>
    <div class="nav">
      <span class="list" @click="back">列表</span> >>&nbsp;&nbsp;详情
    </div>
    <div class="info" style="background-color: #FFF;">
      <img :src="computerInfo.url" alt="">
      <div class="detail">
        <h2>{{ computerInfo.title }}</h2>
        <div class="price">售价：<span>{{ computerInfo.price }}</span></div>
        <div class="address">
          收货地址： {{ computerInfo.address }}
        </div>
        <div class="edit">
          操作：
          <el-button type="primary" class="btn" @click="edit">编 辑</el-button>
        </div>
      </div>
    </div>

    <div>
      <Dialog :openDialog='openDialog' @closeDialog="closeDia" :computerInfo="computerInfo"></Dialog>
    </div>
  </div>
</template>

<script>
import Bus from '@/utils/bus.js'
import { getComputerDetail } from '@/mock/modules/java-mock.js';
import Dialog from './EditDialog.vue'
export default {
  name: 'ComputerDetail',
  components: {
    Dialog,
  },
  data(){
    return{
      openDialog: false,
      id: '',
      computerInfo: {}
    }
  },
  mounted(){
    this.id = this.$route.params.id;
    this.computerInfo = getComputerDetail(this.id);
    
    /* 弹窗的确定按钮通过使用Bus的方法来通信，关闭弹窗 */
    Bus.$on('confirm-edit',(val)=>{
      this.openDialog = val;
    })
  },
  methods:{
    /* 弹窗的取消按钮通过子组件的emit事件，父组件自定义@事件来接收，从而关闭弹窗 */
    closeDia(val){
      this.openDialog = val
    },
    back(){
      this.$router.go(-1)
    },
    edit(){
      this.openDialog = true;
    },
    
  },
  beforeDestroy(){
    Bus.$off('confirm-edit')
  }
}
</script>

<style lang="less" scoped>
.nav {
  color: #FFF;
  padding: 5px 10px;
  .list {
    cursor: pointer;
    padding-right: 6px;
  }
  .list:hover{
    color: #000;
  }
}
.info {
  display: flex;
  justify-content: start;
  padding: 40px;
  margin: 20px 40px;
  border-radius: 8px;
  img {
    width: 500px;
    height: 400px;
    border-radius: 5px;
  }
  .detail {
    margin-left: 30px;
    .price {
      font-size: 20px;
      display: flex;
      align-items: center;
      span {
        font-size: 40px;
        color: darkslategray;
      }
    }
    .address{
      padding: 10px 0;
    }
    .edit {
      padding: 10px 0 ;
      .btn {
        width: 100px;
      }     
    }
  }
}

</style>