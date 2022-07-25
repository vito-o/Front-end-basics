<template>
    <div></div>
</template>


<script>
import _ from 'lodash'
import { ref, computed, watchEffect, watch, reactive } from 'vue'
export default {
    setup() {
        const count = ref(1)
        //const plusOne = computed(() => count.value + 1)

        /* const plusOne = computed({
            get: () => count.value + 1,
            set: val => {
                count.value = val - 1
            }
        }) */

        /* const plusOne = computed(
            () => count.value + 1,
            {
                onTrack(e) {
                    //当count.value作为依赖被追踪时触发
                    debugger
                },
                onTrigger(e) {
                    //当count.value被修改时触发
                    debugger
                }
            }
        )

        // plusOne.value = 1;
        //访问plusOne，应该触发onTrack
        console.log(plusOne.value)
        //修改count.value，应该触发onTrigger
        count.value++; */

        //它立即执行传入的一个函数，同时响应式追踪其他他依赖
        //并再其他依赖变更时重新运行该函数。
        /* const stop = watchEffect(() => console.log(count.value))

        setTimeout(() => {
            count.value++
        },100)

        console.log(stop)
        stop(); */

        setTimeout(() => {
            count.value++
        },500)

        /* watchEffect(onInvalidate => {
            const token = count.value;
            onInvalidate(() => {
                console.log(token, '~')
            })
        }) */

        /* watchEffect(
            () => console.log(count.value),
            {
                flush: 'post'
            }
        )

        {
            count
        } */

        /* const state = reactive({
            count: 0
        })

        watch(
            () => state.count,
            (count, prevCount) => {
                console.log(count, prevCount)
            }
        )

        
        setTimeout(() => {
            state.count = 2;
        },500)

        watch(count, (count, prevCount) => {
            console.log('count', count, prevCount)
        })

        const firstName = ref('')
        const lastName = ref('')

        //再同一个函数里同时改变这些监听的来源，监听器仍指挥执行一次
        watch([firstName, lastName], (newValues, prevValues) => {
            console.log(newValues, prevValues)
        })

        firstName.value = 'john' 
        lastName.value = 'smith' */

        /* const numbers = reactive([1, 2, 3, 4])

        watch(
            () => [...numbers],
            (numbers, prevNumbers) => {
                console.log(numbers, prevNumbers)
            }
        )

        numbers.push(5) */

        /* const state = reactive({
            id: 1,
            attributes: {
                name: ''
            }
        })

        watch(
            () => state,
            (state, prevState) => {
                console.log('not deep', state.attributes.name, prevState.attributes.name)
            }
        )

        watch(
            () => state,
            (state, prevState) => {
                console.log('deep', state.attributes.name, prevState.attributes.name)
            },
            {
                deep:true
            }
        ); */

        const state = reactive({
            id: 1,
            attributes: {
                name: ''
            }
        })

        watch(
            () => _.cloneDeep(state),
            (state, prevState) => {
                console.log('~~', state.attributes.name, prevState.attributes.name)
            }
        )

        setTimeout(() => {
            state.attributes.name = 'alex'
        }, 500)

    }
}
</script>