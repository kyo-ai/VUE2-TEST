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
        <el-form ref="person" :model="person" :rules="personRules" label-width="80px" label-position="left">
          <el-form-item label="用户名：" prop="userName">
            <el-input v-model="person.userName" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="出生日期：" prop="birthday">
            <el-input v-model="person.birthday" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="手机号码：" prop="phoneNumber">
            <el-input v-model="person.phoneNumber" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址：" prop="userAddress">
            <el-input v-model="person.userAddress" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btns">
              <el-button type="primary" @click="changeInfo" class="btn">点击修改</el-button>
              <el-button :disabled="saveDisabled" @click="submit('person', params)" class="btn">保存</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/index.js'
export default {
  data() {
    const userPhoneRule = (rule, value, callback) => {
      let checkPhone = /^1[3-9]\d{9}$/.test(value);
      if (checkPhone) {
        callback()
      } else {
        callback(new Error("请输入正确的手机号"));
      }
    };
    const birthdayRule = (rule, value, callback) => {
      let checkBirthday = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value);
      if (checkBirthday) {
        callback()
      } else {
        callback(new Error("请输入正确的日期格式"));
      }
    };
    return {
      personRules: {
        userName: [ { max: 11, message: '长度不能超过11个字', trigger: 'submit' } ],
        phoneNumber: [
          { required: false, message: '请输入正确的手机号', trigger: 'submit', validator: userPhoneRule }
        ],
        birthday: [
          { required: false, message: '请输入正确的日期格式YYYY-MM-DD', trigger: 'submit', validator: birthdayRule }
        ],
        userAddress: [ { max: 30, message: '长度不能超过30个字', trigger: 'submit' } ]
      },
      person: {
        userName: '',
        birthday: '',
        phoneNumber: '',
        userAddress: '',
      },
      isDisabled: true,
      saveDisabled: true,
      params: [],  //模拟用户修改资料后的数据集
      timer: null
    }
  },
  mounted() {
    getUserInfo().then((res) => {
      if (res.code === 200) {
        //this.person = res.data;
        /* 使用解构，让person和res.data不相等，不共用一个地址 */
        let { userName, birthday, phoneNumber, userAddress } = res.data;
        this.person.userName = userName;
        this.person.birthday = birthday;
        this.person.phoneNumber = phoneNumber;
        this.person.userAddress = userAddress;
      } else {
        this.$message.error('服务器错误或繁忙，请稍后重试');
      }
    });
  },
  methods: {
    changeInfo() {
      this.isDisabled = false;
      this.saveDisabled = false;
    },
    submit(person, params) {
      this.$refs[ person ].validate((valid) => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
          this.isDisabled = true;
          this.saveDisabled = true;
        } else {
          /* 当验证不通过时，设置错误提示的显示时长 */
          this.timer = setTimeout(() => {
            this.$refs.person.clearValidate();
          }, 3000); 
          return false;
        }
      });
    },
    toIndex() {
      this.$router.push({
        path: '/layouts'
      })
    }
  },
  beforeDestroy(){
    clearTimeout(this.timer)
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

.btns {
  display: flex;
  justify-content: space-between;
  .btn {
    width: 180px;
  }
}
</style>