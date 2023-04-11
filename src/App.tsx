
import { defineComponent } from "vue";
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
    return () => {
      return (
        <div class={styles['app-main']}>
          <nav class={styles['app-main-side']}>
            <div class={styles['app-main-side-title']}>&#129409;vue3-babylonjs</div>
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
