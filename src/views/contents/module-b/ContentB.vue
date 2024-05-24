<template>
  <div>
    <div class="computer-table">
      <el-table :data="computerTable" stripe style="width: 100%">
        <el-table-column align="center" prop="date" label="日期" width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="computerName" label="品牌" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.computerName }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="address" label="地址">
          <template slot-scope="scope">
            <span>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getComputerTable } from '@/api/product.js'
export default {
  data() {
    return {
      computerTable: [],
    }
  },
  mounted() {
    getComputerTable().then((res)=>{
      if(res.code === 200){
        this.computerTable = res.data
        console.log(res,"WWWWWWWWWWWW")
      }
      
    })
  },
  methods: {
    handleEdit() { },
    handleDelete() { }
  }
}
</script>

<style lang="less" scoped>
.computer-table {
  margin: 20px;
}
.el-table {
  border-radius: 6px;
}
</style>