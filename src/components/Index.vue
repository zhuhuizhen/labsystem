<template>
  <el-container>
  <el-header>我的商品管理系统</el-header>
  <el-container>
    <el-aside width="200px">
      <el-tree 
      :data="data" 
      :props="defaultProps" 
      @node-click="handleNodeClick">
      </el-tree>
    </el-aside>
    <el-main>
      <el-button type="text" @click="dialogFormVisible = true">新建</el-button>
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
  <el-dialog title="新建商品232" :visible.sync="dialogFormVisible">
    <!-- 步骤条 -->
<el-steps :active="stepactive" simple>
  <el-step title="" icon="" >
    <div slot="icon" class="el-step__icon-inner">1</div>
  </el-step>
  <el-step title="" icon="">
    <div slot="icon" class="el-step__icon-inner">2</div>
  </el-step>
  <el-step title="" icon="">
    <div slot="icon" class="el-step__icon-inner">3</div>
  </el-step>
</el-steps>
    <!-- tabs -->
    <el-tabs stretch @tab-click="changeTab" v-model="activeName">
      <el-tab-pane name="first" label="基本信息xiugai">
         基本信息
        <el-button size="small" class="button-sub" @click="savebasic">下一步</el-button>
      </el-tab-pane>
      <el-tab-pane label="商品图片 " name="second">
        商品图片
       <el-button size="small" class="button-sub" @click="savepic">下一步</el-button>
      </el-tab-pane>
      <el-tab-pane label="商品内容" name="third" >
        商品内容
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
      stepactive: 0, // 步骤条高亮index
      activeName: 'first', // tab高亮
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
      dialogFormVisible: false,
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    // tree 点击事件
    handleNodeClick(data) {
      console.log(data)
    },
    // tab切换事件，同步切换步骤条
    changeTab(tab) {
      this.stepactive = tab.index - 0
    },
    // 点击下一步，保存基本信息，切换第二个tab页面
    savebasic() {
      this.stepactive = 1
      this.activeName = 'second'
    },
    // 点击下一步，保存商品图片，切换第三个tab页面
    savepic() {
      this.stepactive = 2
      this.activeName = 'third'
    }
  }
}
</script>

<style>
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
</style>
