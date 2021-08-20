<template>
  <div class="home">
   {{title}}
   <div>{{c}}</div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data(){
    return {
      c: ''
    }
  },
  mounted() {
    //this.title = 'wang'

    setTimeout(() => {
      // this.$emit('updateXXX', 'wang')

      this.$parent.updateX('wang')
      //this.$set(this.c, 123)
    }, 2000)
  },
}
</script>
