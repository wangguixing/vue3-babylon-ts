export default [
  // 入门
  {
    path: '/',
    name: '01.start',
    component: () => import('../views/start/index')
  },
  // loadAsync方式加载3D文件
  {
    path: '/loadAsync',
    name: '02.loadAsync',
    component: () => import('../views/loadAsync/index')
  },
  // 增加地面
  {
    path: '/ground',
    name: '03.ground',
    component: () => import('../views/ground/index')
  },
  // 增加音频
  {
    path: '/soundVoice',
    name: '04.soundVoice',
    component: () => import('../views/soundVoice/index')
  },
  // 缩放与旋转
  {
    path: '/scaleAndRoute',
    name: '05.scaleAndRoute',
    component: () => import('../views/scaleAndRoute/index')
  },
  // 简单房子创建：利用了CreateCylinder
  {
    path: '/basicHouse',
    name: '06.basicHouse',
    component: () => import('../views/basicHouse/index')
  },
  // 给房子增加纹理
  {
    path: '/addTexture',
    name: '06.addTexture',
    component: () => import('../views/addTexture/index')
  }
]
