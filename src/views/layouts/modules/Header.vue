<template>
  <div>
    <div class="header-icon">
      <i class="el-icon-s-operation" style="font-size: 24px;cursor: pointer;" @click="collapseAside"></i>
    </div>
    <div class="header-info">
      <el-dropdown placement="bottom">
        <div class="avater">
          <img src="@/assets/img/avater.jpg" alt="">
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="personInfo">个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{ phone }}</span>
    </div>
  </div>

</template>

<script>
import Bus from '@/utils/bus.js';
import { getUserInfo } from "@/api/index.js";
export default {
  name: 'HeaderModule',
  data() {
    return {
      phone: ''
    }
  },
  mounted() {
    getUserInfo().then((res) => {
      if (res.code === 200) {
        this.phone = res.data.phoneNumber;
      }
    });
  },
  methods: {
    personInfo(){
      this.$router.push({
        path: '/person-info'
      })
    },
    logout() {
      this.$confirm('确定退出此账号吗?', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showClose: false,
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('mock-token');
        this.$router.replace({
          path: '/login'
        })
        console.log("退出登录")
      }).catch(() => {

      });

    },
    collapseAside() {
      Bus.$emit('collapseAside')
    }
  }
}
</script>

<style lang="less" scoped>
.header-icon {
  line-height: 60px;
  float: left;
}

.header-info {
  height: 60px;
  float: right;
  display: flex;
  align-items: center;
}

.avater {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 10px 0;
  width: 60px;

  img {
    cursor: pointer;
    width: 40px;
    border-radius: 50%;
  }
}
</style>