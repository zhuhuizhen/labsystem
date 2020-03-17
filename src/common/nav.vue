<template>
  <el-aside width="200px">
    <el-menu
      :default-active="defaultActive"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="orgManage">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>组织管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="regionManage">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>数据域管理</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>系统设置</span>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: 'leftNav',
  data() {
    return {
      defaultActive: 'regionManage'
    }
  },
  created() {
    this.setActiveMenu()
  },
  methods: {
    setActiveMenu() {
      this.activeMenu = this.$route.path.replace('/', '')
    }
  }
}
</script>
<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 200px;
}
.el-submenu {
  margin-left: -50px;
}
.el-menu {
  border: none !important;
  height: 100%;
}
.el-menu--inline {
  margin-left: 30px;
}
</style>


