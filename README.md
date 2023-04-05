# vue-babylon-tsx(记录[babylon.js](https://www.babylonjs.com/))

## 必要性与应用方向
- 企业对web3D可视化技术需求越来越多
- 数字孪生、智慧城市、智慧工厂等3D展示等场景都有用到web3D可视化技术

## 代码中的图形学
1. [OpenGL](https://www.opengl.org/)被称为Open Graphics Library。它被称为跨语言和平台应用程序编程接口，用于渲染2D和3D矢量图形，运行于嵌入式设备。
2. [OpenGL ES](https://www.khronos.org/opengles/)OpenGl的高性能精简版。
3. [WebGL](https://developer.mozilla.org) 基于OpenGL ES 2.0（WebGL 2.0基于OpenGL ES 3.0），用于jsvascript,运行于web应用，把JavaScript和OpenGL ES 结合在一起
4. Canvas是HTML5的画布元素，在使用Canvas时，需要用到Canvas的上下文，可以用2D上下文绘制二维的图像，也可以使用3D上下文绘制三维的图像，其中3D上下文就是指WebGL

## WeblGl图形库的选择
- threejs
- [babylon](https://www.babylonjs.com/) --微软Babylon.js 5.0 支持WebGPU
- cesium -- 地理数据gis

## 依赖库安装
- babylonjs
    ```
    yarn add babylonjs
    ```
**...todo...**
