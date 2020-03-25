<template>
  <el-container>
    <el-header>运营管理平台</el-header>
    <el-container>
      <leftNav></leftNav>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import leftNav from '../common/nav'
export default {
  components: { leftNav },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
@import '../assets/comStyle/base.css';
</style>
<style>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 10px;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
