<template>
  <div>
    <div>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu :default-active="activeRouter" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false"
            :collapse="collapse"
            router>
            <el-menu-item index="/layouts/content-a">
              <i class="el-icon-menu"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="/layouts/content-b">
              <i class="el-icon-setting"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航三</span>
              </template>
              <el-menu-item-group>
                <template slot="title"><!-- 分组一 --></template>
                <el-menu-item index="/layouts/content-c">选项1</el-menu-item>
                <el-menu-item index="/layouts/content-c">选项2</el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="/layouts/main-contentA">选项3</el-menu-item>
              </el-menu-item-group> -->
            </el-submenu>           
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Bus from '@/utils/bus.js'
export default {
  name: 'AsiderModule',
  data() {
    return {
      activeRouter: '/layouts/main-contentA',
      collapse: false
    }
  },
  mounted() {
    //刷新网页及设置默认值
    this.activeRouter = this.$route.fullPath || '/layouts/main-contentA';

    //接受header组件按钮的点击折叠事件
    Bus.$on('collapseAside', (prop) => {
      this.collapse = !this.collapse;
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-menu-item-group__title {
  padding: 7px 40px 7px 20px;
}

/* /deep/ ul li{
    padding: 0 50px;
  } */
.el-menu {
  border: none;
}
</style>