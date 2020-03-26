<template>
<div>
  <el-card class="el-card">
    <el-form :model="addform" label-width="100px" label-position="right">
      <el-form-item label="select测试">
        <el-select v-model="addform.select">
          <el-option v-for="(item, index) in options"
                     :key="index"
                     :value="item.value"
                     :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="值：">
        <el-select v-model="addform.value">
          <el-option value="1" label="完成"></el-option>
          <el-option value="2" label="未完成"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="value显示"><el-input v-model="addform.select"></el-input></el-form-item>
      <el-form-item label="输入值：">
        <el-input v-model="names" :label="names" :title="names"></el-input>
      </el-form-item>
      <input hidden v-model="addform.type">
      <el-button type="primary" @click="demo">select取value1选项</el-button>
    </el-form>
  </el-card>
</div>
</template>

<script>
export default {
  // name: 'form',
  data() {
    return {
      readValue: '', // 假设为我们读取到select的value值
      addform: {
        select: 'zhi',
        value: '1',
        type: ''
      },
      options: [
        {
          value: 1,
          label: '测试1'
        },
        {
          value: 2,
          label: '测试2'
        }
      ],
      names: ''
    }
  },
  mounted() {
    this.setData()
  },
  methods: {
    demo() {
      this.readValue = '1' // 此处可以替换成接口读取的内容 在内容未知情况下用Number转换即可
      this.addform.select = Number(this.readValue) // 通过Number将类型转换
    },
    setData() {
      this.addform.type = this.options
        .map(item => {
          return item.value
        })
        .join(',')
      this.names = this.options
        .map(item => {
          return item.label
        })
        .join(',')
      const param = {}
      param.type = this.addform.type
      param.value = this.addform.value
      console.log(param)
    }
  }
}
</script>