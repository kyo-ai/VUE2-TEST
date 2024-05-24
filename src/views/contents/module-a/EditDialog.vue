<template>
  <div>
    <el-dialog title="编辑信息" :visible.sync="changeState" width="50%" :show-close="false" :close-on-click-modal="false" :close-on-press-escape='true' @open="openEvent">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="商品标题">
            <el-input v-model="info.title"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="info.price"></el-input>
          </el-form-item>
          <el-form-item label="收货地址">
            <el-input v-model="info.address"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="南京" value="nanjing"></el-option>
              <el-option label="杭州" value="hangzhou"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Bus from '@/utils/bus.js'
export default {
  name: 'Dialog',
  props: {
    openDialog: {
      type: Boolean,
      default() {
        return false;
      }
    },
    computerInfo: {
      type: Object,
      default: ()=> {
        return null;
      }
    },
  },
  data() {
    return {
      info: {
        title: '',
        price: '',
        address: ''
      },
      form: {
        region: 'hangzhou',
      }
    }
  },
  computed: {
    /* 为了防止打开弹窗后点击空白处，关闭弹窗控制台报错，子组件修改父组件的值的错误提示 */
    /* visible.sync 可以直接赋值为openDialog，但是要关闭弹窗组件点击空白处和esc键的关闭弹窗的功能 */
    changeState: {
      get() {
        return this.openDialog
      },
      set(val) {
        this.$emit("closeDialog", val);
      }
    }
  },
  mounted() {
    
  },
  methods: {
    /* 每次打开弹窗时都会触发 */
    openEvent(){
      /* this.info.title = this.computerInfo.title;
      this.info.price = this.computerInfo.price;
      this.info.address = this.computerInfo.address; */
      /* 赋值给一个新变量info，不直接使用computerInfo是因为修改弹窗中的值时，父组件Detail中的值也会跟着自动被修改 */
      this.$set(this.info,'title',this.computerInfo.title);
      this.$set(this.info,'price',this.computerInfo.price);
      this.$set(this.info,'address',this.computerInfo.address);
      console.log(this.info,"HHHHHHHHH")
    },
    cancel() {
      this.$emit("closeDialog", false);
    },
    confirm() {
      Bus.$emit('confirm-edit', false)
    },
  }
}
</script>

<style scoped></style>