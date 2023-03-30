<template>
  <Header :style="{ padding: 0 }" class="layout-header-bar">
    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{ margin: '0 20px', cursor: 'pointer' }"
      type="md-menu" size="24">
    </Icon>
    <Button type="success" @click="logout" style="margin-right: 32px;">退出登录</Button>
    <Modal 
      v-model="show" 
      title="退出登录" 
      @on-ok="ok" 
      @on-cancel="cancel"
      :mask-closable="false"
    >
      <p>是否确定退出登录？</p>
    </Modal>
  </Header>
  
</template>

<script>
import Bus from '@/api/even'
export default {
  name: 'HeaderTop',
  data() {
    return {
      show: false,
    }
  },
  mounted() { 

  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    }
  },
  methods: {
    logout() {
      this.show = true;
    },
    ok() {
      localStorage.removeItem('router_token');
      this.$Message.success('退出成功');
      this.$router.replace({
        name:'Login'
      })
    },
    cancel() {
      //this.$Message.info('Clicked cancel');
    },
    collapsedSider() {
      Bus.$emit('change-aside')
    }
  }
}
</script>

<style scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-icon {
  transition: all .3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}
</style>