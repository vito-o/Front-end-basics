<template>
  <div class="example">
    <el-button type="primary">Primary</el-button>

    <ul>
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.example {
  color: pink;
}
</style>