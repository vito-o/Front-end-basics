<template>
    <div></div>
</template>

<script>
export default {
    setup() {
    // console.log(inject('i18n'), 'inject')

    // const count = ref(0)
    // const state = reactive({
    //   count
    // })
    // console.log(state.count)
    // state.count = 1
    // console.log(state.count)

    // const books = reactive([ref('vue 3 Guide')])
    // console.log(books[0].value)

    // const map = reactive(new Map([['count', ref(0)]]))
    // console.log(map.get('count'))

    //响应式解构
    // const book = reactive({
    //   author: 'Vue Team',
    //   year: '2020',
    //   title: 'Vue 3 Guide',
    //   description: 'You are reading this book right now ;)',
    //   price: 'free'
    // })

    // //需要将我们的响应式对象转换为一组ref。这些ref将保留与
    // //源对象的响应式关联
    // let { author, title } = toRefs(book)

    // setTimeout(() => {
    //   author.value = 222
    // }, 1000)

    //readonly
    // const original = reactive({count: 0})
    // const copy = readonly(original)

    // original.count++

    // copy.count++

    // return {
    //   // author, title
    // }
  },
}
</script>