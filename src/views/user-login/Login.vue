<template>
  <div class="login">
    <h2 style="margin-bottom: 16px;">用户登录</h2>
    <Form ref="loginInfo" :model="loginInfo" :rules="ruleInline">
      <FormItem prop="phone" class="login-user-name">
        <Input type="text" v-model.trim="loginInfo.phone" placeholder="Phone">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="pwd" class="login-password">
        <Input type="password" v-model.trim="loginInfo.pwd" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="login-submit">
        <Button type="primary" @click="submit('loginInfo')" long>登录</Button>
      </FormItem>
    </Form>
    <div class="test-info">
      <span style="margin-right: 16px;">测试手机号：13658888888</span><span>测试密码：123456</span>
    </div>
  </div>
</template>

<script>
//import { superAdminRoute, adminRoute, visitorRoute } from "@/router";
import { login } from '@/api/login'
export default {
  data() {
    return {
      loginInfo: {
        phone: '',
        pwd: ''
      },
      ruleInline: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码最小位数为6位', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() { },
  methods: {
    submit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          login(this.loginInfo).then((res)=>{
            if(res.code === 200){
              console.log(res);
              this.$Message.success('登录成功');
              localStorage.setItem('router_token',this.loginInfo.phone);
              this.$router.replace({
                name:'UserAuthIndex'
              })
            } else {
              this.$Message.error({
                background: true,
                content: res.msg
              })
            }
          })
        } else {
          //this.$Message.error('手机号或密码错误');
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login{
  margin-top: 100px;
}
.login-user-name,.login-password,.login-submit{
  width: 400px;
  margin: auto;
  margin-bottom: 32px;
}
.test-info{
  color: #a7a3a3;
}
</style>