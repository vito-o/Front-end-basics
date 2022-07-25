<template>
  <div>{{msg}}</div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
let msg: Ref<string> = ref('aaa')
</script>

<style>

</style>