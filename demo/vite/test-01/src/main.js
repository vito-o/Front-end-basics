import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(i18n, {
    greetings: {
        hello: 'Bonjour!'
    }
})

/* app.component('modal-button', {
    template: `
        <button @click="modalOpen=true">
            open full screen modal! (with teleport!)
        </button>

        <teleport to="body">
            <div v-if="modalOpen" class="modal">
                <div>
                    I'm a teleported modal! 
                    (My parent is "body")
                    <button @click="modalOpen = false">
                        Close
                    </button>
                </div>
            </div>
        </teleport>
    `,
    data() {
        return {
            modalOpen: false
        }
    }
}) */

/* const app = createApp({
    template: `
        <h1>Root instance</h1>
        <parent-component />
    `
})

app.component('parent-component', {
    template: `
        <h2>This is a parent component</h2>
        <teleport to="#cpp">
            <child-component name="John" />
        </teleport>
    `
})

app.component('child-component', {
    props: ['name'],
    template: `
      <div>Hello, {{ name }}</div>
    `
}) */

/* const app = createApp({
    template: `
        <anchored-heading :level="2">Hello world!</anchored-heading>
    `
})

app.component('anchored-heading', {
    render() {
        return h(
            'h' + this.level,//标签名
            {},              //prop 或者 attribute
            this.$slots.default()   //b包含其子节点的数组
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}) */




app.mount('#app')