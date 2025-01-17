import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  const c = comp as SFCWithInstall<T>
  c.install = function(app: App) {
    app.component((comp as any).name, comp)
  }
  return c
} 