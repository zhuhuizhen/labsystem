<template>
  <div class="page">
    <!-- tree -->
    <div class="tree-div">
      <el-tree 
        :data="treeData" 
        :props="defaultProps" 
        @node-click="handleNodeClick">
      </el-tree>
    </div>
    <!-- table -->
    <div class="right-page">
      <div class="right-title">
        <el-row>
          <el-col>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <div class="right-content">
        <tableParent></tableParent>
      </div>
    </div>
  </div>
</template>
<script>
import tableParent from './tab/table'
export default {
  components: { tableParent },
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    // 查询
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style>
.el-step.is-simple {
  flex-basis: 42% !important;
}
.el-tabs.el-tabs--top {
  position: relative;
  z-index: 2;
  top: -40px;
}
.el-tabs__active-bar {
  background-color: #f5f7fa;
}
.el-tabs__nav-wrap::after {
  background-color: #f5f7fa;
}
.page {
  height: 100%;
  display: flex;
}
.tree-div {
  width: 200px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.right-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.right-title {
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
}
.el-form--inline .el-form-item {
  line-height: 40px;
}
.right-content {
  flex: 1;
}
</style>

