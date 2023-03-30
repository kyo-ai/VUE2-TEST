<template>
  <div class="layout">
    <Aside></Aside>
    <Layout>
      <header-top></header-top>
      <!-- <main-content></main-content> -->
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Aside from './layout/Aside.vue'
import HeaderTop from './layout/Head.vue'
import MainContent from './layout/Main.vue'
export default {
  components: {
    Aside, HeaderTop, MainContent
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="less">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  display: flex;
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>