/*
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-11 14:13:37
 * @FilePath: \src\stores\index.ts
 * @Description: 注明出处即可
 * Copyright 2023 wangguixing, All Rights Reserved.
 * 2023-03-30 18:08:10
 */

import { createPinia } from 'pinia'
import { useFpsStore } from './fps'
const pinia = createPinia()

export { useFpsStore }
export default pinia
