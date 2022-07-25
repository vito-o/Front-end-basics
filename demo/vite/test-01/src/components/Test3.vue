<script >
//setup还可以返回一个渲染函数，改函数可以直接使用再同一个作用域
//中声明的响应式状态
import { h, ref, reactive } from 'vue'
export default {
  // props: ['msg'],
  setup(props, context) {
    const readersNumber = ref(0)
    const book = reactive({title: 'vue3'})

    return () => h('div', [readersNumber.value, '~~', book.title])
  },
}
/**
 * 返回一个渲染函数将阻止我们返回任何其他的东西，从内部来说
 * 着不应该成为问题，但当我们想要将这个组件的方法通过模板ref
 * 暴露给父组件时就不一样了
 */

</script>

<style scoped>

</style>
