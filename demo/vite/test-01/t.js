import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp({
    custom: 'hello'
})

app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
    console.log(fromVal, toVal)

    return fromVal || toVal
}

app.mixin({
    custom: 'goodbye!',
    created() {
        console.log(this.$options.custom)
    }
})


app.mount('#app')