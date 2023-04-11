export default [
  {
    path: '/',
    name: '01.start',
    component: () => import('../views/start/index')
  },
  {
    path: '/loadAsync',
    name: '02.loadAsync',
    component: () => import('../views/loadAsync/index')
  }
]
