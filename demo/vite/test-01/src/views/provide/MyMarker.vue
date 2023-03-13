<template>
    <div>
      <div @click="updateLocation">{{userLocation}}</div>
      <div>{{userGeolocation}}</div>
    </div>
</template>

<script >
import { inject } from 'vue'
export default {
  setup(props, context) {
    const userLocation = inject('location')
    const userGeolocation = inject('geolocation')
    const updateLocation = inject('updateLocation')
    console.log(userLocation)
    userLocation.value = 'hhh11'
    // console.log(userLocation)
    // console.log(userGeolocation)
    return {
      userLocation,
      userGeolocation,
      updateLocation
    }
  },
}

</script>

<style scoped>

</style>
