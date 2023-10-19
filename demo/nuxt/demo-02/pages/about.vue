<template>
  <!-- <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
  <p>Page vistis: {{ data }}</p>
  <button @click="refresh">Refresh data</button> -->
  
  <div v-if="status === 'idle'">
    <button @click="execute">Get data</button>
  </div>
  <div v-if="pending">
    Loading comments...
  </div>
  <div v-else>{{ data }}</div>
  <p>{{ count1 }}</p>
</template>

<script setup lang="ts">
  const status = ref('')
/* definePageMeta({
  middleware: 'perm'
}) */


  const id = ref(1)
  
  const headers = useRequestHeaders(['cookie'])
  const { data, error, pending, refresh, execute } = await useFetch(
    'http://localhost:3080/count',
    {
      // headers
    }
  )

  const count1 = useState('counter')

  /* onMounted(() => {
    setTimeout(() => {
      id.value = 10
    }, 2000)
  }) */
  // const { data, error, execute, pending, status } = await useFetch('/authApi/count')

  // const data = await $fetch('http://localhost:3080/count')

  // const { data, error } = await useAsyncData('count', () => $fetch('http://localhost:3080/count'))

  

  onMounted(() => {
    console.log(pending)
    // execute()
  })

</script>