<template>
<div>{{location}}</div>
    <MyMarker />
    <button>click</button>
</template>

<script >
import { provide, reactive, ref, readonly } from 'vue'
import MyMarker from './MyMarker.vue'
export default {
  components: {
    MyMarker
  },
  setup(props, context) {
    const location = ref('North pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    const updateLocation = () => {
      location.value = 'south pole'
    }

    provide('location', location)
    provide('geolocation', readonly(geolocation))
    provide('updateLocation', updateLocation)

    const aaa = () => {
      location.value = 'north' + Math.random()
    }

    return {
      location
    }
  },
}

</script>

<style scoped>

</style>
