<template>
  <NuxtLayout>
    <NuxtPage />

    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>

      <p>Current color: {{ color }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()

// console.log(runtimeConfig, 'r.')
const counter = useState(
  'counter', 
  () => Math.round(Math.random() * 1000)
)
const color = useColor()

</script>
