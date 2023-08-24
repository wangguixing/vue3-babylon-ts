/*
 * @Author: wangguixing
 * @Date: 2023-08-21 09:44:06
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-08-24 10:52:31
 * @FilePath: \src\router\routes.ts
 */
export default [
  // 入门
  {
    path: '/',
    name: '01.start',
    meta: {
      title: '01.入门'
    },
    component: () => import('../views/start/index')
  },
  // loadAsync方式加载3D文件
  {
    path: '/loadAsync',
    name: '02.loadAsync',
    meta: {
      title: '02.加载3D文件'
    },
    component: () => import('../views/loadAsync/index')
  },
  // 增加地面
  {
    path: '/ground',
    name: '03.ground',
    meta: {
      title: '03.增加地面'
    },
    component: () => import('../views/ground/index')
  },
  // 增加音频
  {
    path: '/soundVoice',
    name: '04.soundVoice',
    meta: {
      title: '04.增加音频'
    },
    component: () => import('../views/soundVoice/index')
  },
  // 缩放与旋转
  {
    path: '/scaleAndRoute',
    name: '05.scaleAndRoute',
    meta: {
      title: '05.缩放与旋转'
    },
    component: () => import('../views/scaleAndRoute/index')
  },
  // 简单房子创建：利用了CreateCylinder
  {
    path: '/basicHouse',
    name: '06.basicHouse',
    meta: {
      title: '06.基础房子'
    },
    component: () => import('../views/basicHouse/index')
  },
  // 给房子增加纹理
  {
    path: '/addTexture',
    name: '07.addTexture',
    meta: {
      title: '07.给房子增加纹理'
    },
    component: () => import('../views/addTexture/index')
  },
  // 给房子增加窗户
  {
    path: '/addWindow',
    name: '08.addWindow',
    meta: {
      title: '08.给房子增加窗户'
    },
    component: () => import('../views/addWindow/index')
  }
]
