<template>
  <div>
    测试用例首页
  </div>
</template>

<script>
import { getUserInfo } from "@/api/index.js";
export default {
  data() {
    return {

    }
  },
  mounted() {

    /* //Mock原生写法
    this.$http.get('/mock/userAdress').then((res) => {
      console.log(res, "AAAA")
    }) */


    /* Mock配合axios封装写法 */
    getUserInfo().then((res) => {
      console.log(res, "GGGGGGGG")
    })
  }
}
</script>

<style scoped></style>