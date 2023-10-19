<template>
  <div>
    <h1>Welcome to the homepage~~~</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>

    <img src="/img/1.png" alt="Discover Nuxt 3"/>

    <img src="~/assets/img/2.png" />

    <p>The Dynamic Style Width</p>

    <div :class="$style.red">This should be red</div>

    <button @click="about">about</button>
  </div>
</template>

<script setup lang="ts">
const color = ref('red')

onMounted(() => {
  setTimeout(() => {
    color.value = 'orange'

    document.cookie = 'username=zhangsan'
  }, 2000)
})

const about = () => {
  useRouter().push('/about')
}
</script>

<style lang="scss" scoped>
h1{
  color: purple;
  color: $secondary;
}

p {
  color: v-bind(color);
}
</style>

<style module>
.red {
  color: red;
}
</style>