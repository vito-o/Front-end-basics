<template>
    <div>{{msg}}: {{readersNumber}} {{book.title}}</div>
</template>

<script >
//如果setup返回一个对象，那么 该对象的property以及传递给
//setup的props参数中的property就都可以在模板中访问到
import { ref, reactive } from 'vue'
export default {
  props: ['msg'],
  setup(props, context) {
    const readersNumber = ref(0)
    const book = reactive({ title: 'vue 3 Guide' })
    
    return {
     readersNumber,
     book
    }
  },
}
//从setup返回的refs在模板中访问时是被自动浅解析包的，因此
//不应再模板中使用.value
</script>

<style scoped>

</style>
