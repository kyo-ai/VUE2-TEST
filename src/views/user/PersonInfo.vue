<template>
  <div class="person">
    <div class="back" @click="toIndex">
      <img src="@/assets/icon/back.png" alt="" class="back-icon">
      返回首页
    </div>
    <img src="@/assets/img/avater.jpg" alt="" class="avatar">
    <div>
      <h2 style="text-align: center;">个人资料</h2>
      <div>
        <el-form ref="person" :model="person" label-width="80px" label-position="left">
          <el-form-item label="用户名：">
            <el-input v-model="person.name"></el-input>
          </el-form-item>
          <el-form-item label="出生日期：">
            <el-input v-model="person.birthday" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="手机号码：">
            <el-input v-model="person.phone" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址：">
            <el-input v-model="person.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
            <el-button>保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: '',
        birthday: '',
        phone: '',
        address: '',
      }
    }
  },
  mounted() { },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    toIndex(){
      this.$router.push({
        path: '/layouts'
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-form-item__label {
  padding: 0;
}
/deep/ .el-input {
  width: 400px;
}
.person {
  position: relative;
  display: flex;
  //align-items: center;
  justify-content: center;
  background-color: #E4E7ED;
  padding: 50px;
  margin: 40px;
  border-radius: 20px;
  .avatar {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    margin-right: 150px;
  }
  .back {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    .back-icon {
      width: 20px;
      height: 20px;
      padding-right: 5px;
    }
  }
  .back:hover {
    color: #000;
  }
}
</style>