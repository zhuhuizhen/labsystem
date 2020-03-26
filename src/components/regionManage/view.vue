<template>
  <div class="page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据域管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- tree -->
    <div class="page-right">
      <div class="treeArea">
        <el-tree
          :data="treeData"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="tableData">
        </el-tree>
      </div>
      <div class="right-content">
        <div class="right-title">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="名称:">
              <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-area">
          <add :indexs="indexs"></add>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import add from './add'
export default {
  components: { add },
  data() {
    return {
      parentval: '',
      indexs: '',
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      formInline: {
        user: ''
      }
    }
  },
  created() {
    this.getval()
  },
  methods: {
    getval() {
      this.indexs = 'zifu'
    }
  }
}
</script>
<style>
.el-breadcrumb {
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  background-color: #f0f0f0;
}
.page {
  height: 100%;
  display: flex;
}
.page-right {
  flex: 1;
  display: flex;
}
.treeArea {
  width: 150px;
  margin: 5px;
  height: 100%;
}
.el-tree {
  height: 100%;
  width: 150px;
  border: 1px solid #ccc;
  background-color: none;
}
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.right-title {
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
}
.el-form {
  height: 100%;
  line-height: 1;
  text-align: left;
}
.el-form-item {
  height: 40px;
  margin-bottom: 0px;
}
.el-form-item .el-form-item__label {
  float: left !important;
}
.table-area {
  border: 1px solid #ccc;
  flex: 1;
  margin-top: 5px;
}
</style>

