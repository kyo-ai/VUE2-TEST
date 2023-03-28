<template>
  <div>
    <div class="logout">
      <Button type="success" @click="logout">退出登录</Button>
    </div>

    <Modal 
      v-model="show" 
      title="退出登录" 
      @on-ok="ok" 
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <p>是否确定退出登录？</p>
    </Modal>

  </div>
</template>

<script>
export default {
  name: 'Logout',
  data() {
    return {
      show: false,
    }
  },
  mounted() { },
  methods: {
    logout() {
      this.show = true;
    },
    ok() {
      localStorage.removeItem('router_token');
      this.$Message.info('Clicked ok');
      this.$router.replace({
        name:'Login'
      })
    },
    cancel() {
      //this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style scoped lang="less">
.logout {
  width: 100%;
  text-align: right;
  padding: 16px 60px;
  background-color: rgb(234, 236, 238);
}
</style>