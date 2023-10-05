<template>
  <!-- <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
  <p>Page vistis: {{ data }}</p>
  <button @click="refresh">Refresh data</button> -->
  
  <div v-if="status === 'idle'">
    <button @click="execute">Get data</button>
  </div>
  <div v-else-if="pending">
    Loading comments...
  </div>
  <div v-else>{{ data }}</div>
</template>

<script setup lang="ts">
/* definePageMeta({
  middleware: 'perm'
}) */
  // const { data, error, refresh } = await useFetch('http://localhost:3080/count')
  const { data, error, execute, pending, status } = await useFetch('/authApi/count')

  // const data = await $fetch('http://localhost:3080/count')

  // const { data, error } = await useAsyncData('count', () => $fetch('http://localhost:3080/count'))

  console.log(pending, status)
</script>