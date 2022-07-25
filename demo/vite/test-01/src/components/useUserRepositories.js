import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(msg) {
    let repositories = ref([])

    const getUserPrpositories = async (val) => {
      repositories.value = [1, 2, 3, 4, 5, 6, val]
    }

    //在mounted时调用getUserPrpositories
    onMounted(getUserPrpositories)

    //在msg prop的响应式引用上设置一个侦听器
    watch(msg, getUserPrpositories)

    return {
        repositories, 
        getUserPrpositories,
    }
}