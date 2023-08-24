/*
 * @Author: wangguixing
 * @Date: 2023-08-21 09:44:06
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-08-24 10:45:27
 * @FilePath: \src\App.tsx
 */

import { defineComponent, toRefs, watchEffect, ref } from "vue";
import { RouterLink, RouterView, useRoute, } from 'vue-router'
import routesList from './router/routes'
import styles from "./assets/styles/app.module.less";

export default defineComponent({
  setup() {
    const route = useRoute()
    const routesListMap = routesList.map((i) => {
      return {
        path: i.path,
        name: i.name
      }
    })

    const currentRouterTitle = ref('')
    watchEffect(() => {
      const watchRoute = toRefs(route)
      const title = watchRoute.meta.value.title as string || ''
      if (title) {
        currentRouterTitle.value = title
      }
    })
    return () => {
      return (
        <div class={styles['app-main']}>
          <nav class={styles['app-main-side']}>
            <div class={styles['app-main-side-title']}>{currentRouterTitle.value}</div>
            {
              routesListMap.map((routeItem) => {
                return <RouterLink class={route.path == routeItem.path ? styles['actived-route'] : ''} key={routeItem.path} to={routeItem.path}>{routeItem.name}</RouterLink>
              })
            }
          </nav>
          <div class={styles['app-main-container']}>
            <RouterView />
          </div>
        </div>
      )
    }
  }
})
