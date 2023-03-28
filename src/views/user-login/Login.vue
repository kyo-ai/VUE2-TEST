<template>
  <div class="login">
    <h2 style="margin-bottom: 16px;">用户登录</h2>
    <Form ref="loginInfo" :model="loginInfo" :rules="ruleInline">
      <FormItem prop="userName" class="login-user-name">
        <Input type="text" v-model.trim="loginInfo.userName" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password" class="login-password">
        <Input type="password" v-model.trim="loginInfo.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="login-submit">
        <Button type="primary" @click="handleSubmit('loginInfo')" long>登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        userName: '',
        password: ''
      },
      ruleInline: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码最小位数为6位', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() { },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          localStorage.setItem('router_token',this.loginInfo.userName)
          this.$router.push('/')
          this.$Message.success('登录成功');
        } else {
          this.$Message.error('账号或密码错误');
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
</style>