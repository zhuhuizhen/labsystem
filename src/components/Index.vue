<template>
  <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </el-main>
  </el-container>

  // 对话框
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-tabs stretch v-model="activeName">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
        <el-button size="small" class="button-sub" @click.native="submitUserForm()">下一步</el-button>
      </el-tab-pane>
      <el-tab-pane label="" name="second">
        <span slot="label" :class="{hidden:ishidden}"><i class="el-icon-date"></i> 消息中心</span>
        消息中心
      </el-tab-pane>
      <el-tab-pane label="" name="third" >
        <span slot="label"><i class="el-icon-date"></i> 角色管理</span>
        角色管理
      </el-tab-pane>
    </el-tabs>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

</el-container>
</template>
<script>
export default {
  data() {
    return {
      ishidden: true,
      // activeName: 'first',
      // disabled: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      dialogFormVisible: false
    }
  },
  methods: {
    submitUserForm() {
      // this.activeName = 'second'
      this.ishidden = false
    }
  }
}
</script>

<style>
.ishidden {
  display: none;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>F