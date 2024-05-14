<template>
  <div class="container">
    <div class="logo-img">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="form-style">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入手机号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="ruleForm.passWord" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')" style="width: 300px;">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    const userNameRule = (rule, value, callback) => {
      console.log(value);
      let isPhone = /^1[3-9]\d{9}$/.test(value);
      if (isPhone) {
        callback()
      } else {
        callback(new Error("Please enter the correct user name"));
      }
    };
    const passWordRule = (rule, value, callback) => {
      if (value.length >= 6 && value.length <= 10) {
        callback()
      } else {
        callback(new Error("Please enter the correct pwd"));
      }
    };
    return {
      ruleForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入正确的手机号', trigger: 'blur', validator: userNameRule }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在6到10个字符', trigger: 'blur', validator: passWordRule }
        ]
      }
    }
  },
  mounted() { },
  methods: {
    login(formName) {
      this.$refs[ formName ].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* resetForm(formName) {
      this.$refs[ formName ].resetFields();
    } */
  }
}
</script>

<style lang="less" scoped>
.container{
  display: flex;
  align-items: center;
  .logo-img>img{
    width: 80%;
  }
}
.form-style {
  width: 30%;
  margin: 0;
}
.el-form-item{
  margin-bottom: 40px;
}
</style>