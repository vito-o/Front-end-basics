<!--<template>
  <div ref="root">this is a view element</div>
</template>
-->
<script>
import { ref, onMounted, h } from 'vue'
export default {
    setup(props) {
        const root = ref(null)
        // console.log(root)
        // onMounted(() => {
        //     console.log(root.value)
        // })

        // return {
        //     root
        // }

        return () => 
            h('div', { ref: root }, 'hh')
        
    }
}
</script>

<style>

</style>