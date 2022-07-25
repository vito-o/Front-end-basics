import { ref, computed } from 'vue'

export default function useRepositoryNameSearch(repositories) {
    
    const  searchQuery = ref(3);
    
    const repositoriesMatchingSearchQuery = computed(() => {
      return repositories.value.filter(
        repository => repository > searchQuery.value
      )
    })

    return {
      searchQuery,
      repositoriesMatchingSearchQuery
    }
}