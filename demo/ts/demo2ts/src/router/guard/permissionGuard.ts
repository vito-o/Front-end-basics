import type { Router } from 'vue-router'
import store from '@/store'
import { PageEnum } from '@/enums/pageEnum'

//白名单列表
const whitePathList: PageEnum[] = [PageEnum.BASE_LOGIN];

/**
 * 建立权限路由守卫
 * @param router 
 */
export function createPermissionGuard(router: Router) {

  router.beforeEach((to, from, next) => {
    //白名单直接通过
    if(whitePathList.includes(to.path as PageEnum)) {
      return next() 
    } else {
      store.commit('IS_ADD_ASYNC_ROUTER', true)
      
      if(store.getters.isAddAsyncRouter) {
        return next();
      } else { 
        const redirectData: { path: string; replace: boolean; query?: Recordable } = {
          path: PageEnum.BASE_LOGIN,
          replace: true,
        }
  
        if(to.path) {
          redirectData.query = {
            ...redirectData.query,
            //redirect: to.path
          }
        }

        return next(redirectData);
      }
    }
  })

  router.afterEach(to => {

  })

}