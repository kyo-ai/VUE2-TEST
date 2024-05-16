<template>
  <div class="container">
    <div class="logo-img">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="form-style">
      <h3 style="margin-bottom: 30px;">测试账号：账号:13888888888 , 密码:123456</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入手机号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="ruleForm.passWord" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')" style="width: 300px;">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          <el-button type="primary" @click="wirte" style="width: 300px;margin-top: 20px;margin-left: 0;">一键填入</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import { userLogin } from '@/api/index.js';
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
          { required: true, message: '请输入正确的手机号', trigger: 'submit', validator: userNameRule }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在6到10个字', trigger: 'submit', validator: passWordRule }
        ]
      }
    }
  },
  mounted() { 

  },
  methods: {
    login(formName) {
      this.$refs[ formName ].validate((valid) => {
        if (valid) {
          if (this.ruleForm.userName == 13888888888 && this.ruleForm.passWord == '123456') {
            userLogin().then((res)=>{
              if(res.code === 200){
                console.log(res,'SSSSSS');
                localStorage.setItem( 'mock-token', res.data.token);
              }             
            })
            console.log('登录成功');
            this.$router.replace({
              path: '/layouts'
            })
          } else {
            this.$message.error('账号或密码错误，请重新输入');
            this.$refs[ formName ].resetFields();
            return false
          }
        } else {
          return false;
        }
      });
    },
    /* resetForm(formName) {
      this.$refs[ formName ].resetFields();
    } */

    wirte(){
      this.ruleForm.userName = 13888888888;
      this.ruleForm.passWord = '123456'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  margin-top: 60px;
  .logo-img>img {
    width: 75%;
  }
}

.form-style {
  width: 30%;
  margin: 0;
}

.el-form-item {
  margin-bottom: 40px;
}
</style>