<template>
  <div>
    <el-container>
      <el-aside :width="asideWidth">
        <AsiderModule></AsiderModule>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderModule></HeaderModule>
        </el-header>
        <el-main>
          <MainModule></MainModule>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderModule from './modules/Header.vue';
import MainModule from './modules/Main.vue';
import AsiderModule from './modules/Asider.vue';
import Bus from '@/utils/bus.js'
export default {
  name: 'Layouts',
  components: {
    HeaderModule,
    MainModule,
    AsiderModule
  },
  data() {
    return {
      isCollapse: false,
      asideWidth: '200px'
    }
  },
  mounted() {
    Bus.$on('collapseAside', (prop) => {
      //左侧侧边栏展开与合并时的宽度问题解决方法
      if (!this.isCollapse) {
        this.asideWidth = 'auto';
        this.isCollapse = !this.isCollapse;
      } else {
        this.asideWidth = '200px';
        this.isCollapse = !this.isCollapse;
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped>
#test {
  color: red;
}

.el-container {
  height: 100vh;

  .el-aside {
    background: #545c64;
  }
}

.el-header {
  background-color: #e4e8ec;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #FFF;
  color: #333;
  text-align: center;
}
</style>