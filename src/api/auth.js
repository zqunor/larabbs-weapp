// 封装API: 在 api 目录中对后端接口做统一的归类以及封装。

import { request } from '@/utils/request'

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}
