<template>
    <Sider ref="asideGroup" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <Menu :active-name="activeName" theme="light" width="auto" :class="menuitemClasses" style="height: 100vh;">
      <MenuItem name="1" :to="{ name: 'FirstQuarter'}">
        <Icon type="ios-navigate"></Icon>
        <span>第一季度</span>
      </MenuItem>
      <MenuItem name="2" :to="{ name: 'SecondQuarter'}">
        <Icon type="ios-search"></Icon>
        <span>第二季度</span>
      </MenuItem>
      <MenuItem name="3" :to="{ name: 'ThirdQuarter'}">
        <Icon type="ios-settings"></Icon>
        <span>第三季度</span>
      </MenuItem>
      <MenuItem name="4" :to="{ name: 'FourthQuarter'}">
        <Icon type="ios-settings"></Icon>
        <span>第四季度</span>
      </MenuItem>
    </Menu>
  </Sider>
  
</template>

<script>
import Bus from '@/api/even'
export default {
  name: 'Aside',
  data() {
    return {
      list:{
        'FirstQuarter' : '1',
        'SecondQuarter' : '2',
        'ThirdQuarter' : '3',
        'FourthQuarter' : '4'
      },
      isCollapsed: false,
      activeName: '1'
    }
  },
  mounted() { 
    this.activeName = this.list[this.$route.name]
    Bus.$on('change-aside',()=>{
      this.$refs.asideGroup.toggleCollapse();
    })
  },
  computed: {
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
/deep/ .ivu-menu-item{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>