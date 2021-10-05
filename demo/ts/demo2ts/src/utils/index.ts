
import type { App, Plugin } from 'vue';

import { unref } from 'vue'
import { isObject } from './is'

export function setObjectToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for(const key of obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');

  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}


export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for(key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src;
}

export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean }
) {
  const { target ='_123', noopener = true, noreferrer = true } = opt || {}
  const feature: string[] = [];

  noopener && feature.push('noopener=yes');
  noreferrer && feature.push('noreferrer=yes')

  window.open(url, target, feature.join(','));
}

export function getDynamicProps<T, U>(props: T): Partial<U> {
  const ret: Recordable = {}

  Object.keys(props).map((key) => {
    ret[key] = unref((props as Recordable)[key]);
  })

  return ret as Partial<U>
}

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if(alias) {
      app.config.globalProperties[alias] = component;
    }
  }
  return component as T & Plugin;
}