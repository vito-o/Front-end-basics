<template>
  <div class="list-wrapper">

    <div class="search-wrap fn-clear">

      <div class="s-btn-wrap">
        <el-button type="primary" @click="add">新增</el-button>
      </div>
    </div>

    <div class="table-wrap">
      <el-table :data="tableInfos" style="width: 100%">
        <el-table-column prop="index" label="序号" width="80" />
        <el-table-column prop="name" label="资产名称" width="180" />
        <el-table-column prop="classify" label="资产分类" width="180" />
        <el-table-column prop="dataSource" label="源数据" />
        <el-table-column prop="state" label="执行结果" />
      </el-table>
    </div>

    <el-dialog
      v-model="dialog.show"
      title="Tips"
      width="30%"
    >
    <!-- :before-close="handleClose" -->
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialog.ok">确定</el-button>
          <el-button @click="dialog.cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup(props) {
    let tableInfos = reactive([
      { index: 1, name: 'su0012', classify: '卫生安全', dataSource: 'rst_baisc', state: '成功' },
      { index: 2, name: 'aaa001', classify: '学生主题', dataSource: '10.18.100.157-sjzt_develop', state: '成功' },
      { index: 3, name: '撒旦发生', classify: '教师基础信息', dataSource: 'rst_baisc', state: '成功' },
      { index: 4, name: '人员基本信息', classify: '甘肃电信企业数据', dataSource: '数据中心', state: '成功' },
      { index: 5, name: 'ads_qyhx_result', classify: '行业对接主题', dataSource: '10.18.101.102-pg', state: '成功' },
    ])


    let dialog = reactive({
      show: false,
      ok: () => { dialog.show = false },
      cancel: () => { dialog.show = false }
    })

    const add = () => {
      dialog.show = true;
    }

    return { 
      tableInfos, dialog, add
    }
  }
})
</script>

<style lang="less" scoped>
.list-wrapper{
  
}

.s-btn-wrap{
  float: right;
}
</style>