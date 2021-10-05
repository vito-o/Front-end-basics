import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store'

//模块扩展
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: Store<State>
  }
}