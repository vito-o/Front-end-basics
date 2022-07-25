<template>
  <div>
    <h2>Scroll down the page</h2>
    <input type="range" min="0" max="500" v-model="pinPadding">
    <p v-pin:[direction]="pinPadding">Stick me {{ pinPadding + 'px' }} from the {{ direction || 'top' }} of the page</p>


    <hr/>

    <modal-button/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            direction: 'right',
            pinPadding: 200
        }
    },
    directives: {
        pin: {
            mounted(el, binding) {
                el.style.position = 'fixed'
                const s = binding.arg || 'top'
                el.style[s] = binding.value + 'px'
                console.log(binding)
            },
            updated(el, binding) {
                const s = binding.arg || 'top'
                el.style[s] = binding.value + 'px'
            },
        }
    }
}
</script>

<style scoped>

</style>