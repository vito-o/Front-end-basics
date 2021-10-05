import type { CreateAxiosOptions } from './axiosTransform'

import { VAxios } from './VAxios'

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios();
}

export const defHttp = createAxios()