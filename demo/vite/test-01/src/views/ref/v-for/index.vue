<template>
  <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">{{item}}</div>
</template>

<script>
import { ref, reactive, onBeforeUpdate, onMounted } from 'vue'
export default {
    setup() {
        const list = reactive([1, 2, 3])
        const divs = ref([])

        onMounted(() => {
            console.log(divs)
        })

        return {
            list,
            divs,
        }
    }
}
</script>

<style>

</style>