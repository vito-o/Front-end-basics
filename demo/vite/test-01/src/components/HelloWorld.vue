<script >
import { toRefs, ref, toRef } from 'vue'
import useUserRepositories from './useUserRepositories'
import useRepositoryNameSearch from './useRepositoryNameSearch'
export default {
  props: ['msg'],
  setup(props) {
    //使用toRefs创建对props中的 msg property的响应式引用
    //因为props是响应式的，你不能使用ES6解构，它会消除prop的响应性
    const { msg } = toRefs(props);

    const { 
      repositories, 
      getUserPrpositories
    } = useUserRepositories(msg)

    const { 
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    const title = toRef(props, 'title')
    console.log(title.value, 'title')

    console.log(ref(props.msg), props.msg, msg)
    let test = ref(props.msg);



    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserPrpositories,
      searchQuery,
      test,
      props
    }
  },
}


</script>

<template>
  <!-- <h1>{{ repositories }}</h1> -->
  <hr>
  <div>
    searchQuery: <span>{{repositories}}</span>
  </div>
  <div>test: {{test}}</div>
  <div>{{props.msg}}</div>
</template>

<style scoped>

</style>
