import type { Router } from 'vue-router'
import { createPermissionGuard } from './permissionGuard'
/**
 * 建立路由守卫入口
 * @param router 
 */
export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
}