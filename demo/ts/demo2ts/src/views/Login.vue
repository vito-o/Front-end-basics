<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" show-password></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">sign in</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'login',
  setup(props) {
    const router = useRouter()
    // console.log(getCurrentInstance()?.appContext.config.globalProperties.$message)
    //表单数据
    const form = reactive({
      username: 'admin',
      password: '123456'
    })

    //登录按钮
    const onSubmit = () => {
      ElMessage({
        message: '正在登录，请稍后',
        type: 'success',
      })

      router.push({ name: 'index' })
    }

    return {
      form, onSubmit
    }
  }
})

</script>

<style>

</style>