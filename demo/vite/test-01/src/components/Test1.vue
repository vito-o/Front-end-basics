<script >
export default {
  props: ['msg'],
  setup(props, context) {

    console.log(context.attrs, 'attrs')

    console.log(context.slots)

    //触发方法（方法，等同于 $emit）
    console.log(context.emit)
    // context.emit('cc', 'hi cc !')

    // 暴露公共 property 函数
    console.log(context.expose)

    return {
     
    }
  },
}


</script>

<template>
  <!-- <h1>{{ repositories }}</h1> -->
    <div>11</div>

    <slot></slot>
</template>

<style scoped>

</style>
