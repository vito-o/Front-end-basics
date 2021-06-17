<template>
  <div class="home">
    <!-- toolbar -->
    <div class="toolbar"></div>

    <main>
      <section class="left">
        <ComponentList />
      </section>

      <section class="center">
        <div class="content">
          <Editor/>
        </div>
      </section>

      <section class="right"></section>
    </main>

  </div>
</template>

<script>
import ComponentList from './ComponentList';
import Editor from './Editor';
export default {
  components: {
    ComponentList
  }
}
</script>

<style lang="less" scoped>

</style>

<style lang="less">

</style>