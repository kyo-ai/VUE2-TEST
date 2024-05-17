<template>
  <div>
    <div class="list">列表</div>
    <div class="container">
      <div class="pic" @click="toDetail">
        <img src="@/assets/img/computer.jpg" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){},
  methods:{
    toDetail(){
      this.$router.push({
        path:'/layouts/detail-A'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  text-align: left;
  color: #258ef8;
}
.container{
  display: flex;
  justify-content: start;
  padding: 10px
}
.pic{
  cursor: pointer;
  img {
    width: 240px;height: 180px;
    border-radius: 5px;
  }
}

</style>