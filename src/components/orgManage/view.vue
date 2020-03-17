<template>
  <div class="page">
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

      // 对话框
  <el-dialog title="新建商品" :visible.sync="dialogFormVisible">
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
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
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

