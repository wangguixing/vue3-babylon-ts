# vue-babylon-tsx(记录[babylon.js](https://www.babylonjs.com/))

## 必要性与应用方向
- 企业对web3D可视化技术需求越来越多
- 数字孪生、智慧城市、智慧工厂等3D展示等场景都有用到web3D可视化技术
- chrome-113开始支持webGpu，3D网站的发展趋势

## 代码中的图形学
1. [OpenGL](https://www.opengl.org/)被称为Open Graphics Library。它被称为跨语言和平台应用程序编程接口，用于渲染2D和3D矢量图形，运行于嵌入式设备。
2. [OpenGL ES](https://www.khronos.org/opengles/)OpenGl的高性能精简版。
3. [WebGL](https://developer.mozilla.org) 基于OpenGL ES 2.0（WebGL 2.0基于OpenGL ES 3.0），用于jsvascript,运行于web应用，把JavaScript和OpenGL ES 结合在一起
4. Canvas是HTML5的画布元素，在使用Canvas时，需要用到Canvas的上下文，可以用2D上下文绘制二维的图像，也可以使用3D上下文绘制三维的图像，其中3D上下文就是指WebGL

## WeblGl图形库的选择
- threejs
- [babylon](https://www.babylonjs.com/) --微软Babylon.js 5.0 支持WebGPU
- cesium -- 地理数据gis

选择babylon，精彩实现站点参考[cool360数字展馆](https://webvr.walkclass.com/#/)

## 依赖库选择与安装
    ```
    yarn add @babylonjs/core  -D
    yarn add @babylonjs/inspector  -D
    yarn add @babylonjs/loaders  -D
    yarn add @babylonjs/gui -D
    yarn add @babylonjs/materials -D
    yarn add @babylonjs/gui-editor -D
    yarn add @babylonjs/serializers -D
    ```
## 概念术语解读

- Engine：用来关联canvas与babylon
- Scene：基于Engine创建场景
- camera: 场景中呈现的视角
- light：点亮场景，HemisphericLight球形光
- MeshBuilder: 框架用来勾勒模型形状
- Material: 材质用料粉饰模型
- Texure: 纹理 在Material基础上画画
- Vector: 向量坐标系
- color: 着色

## babylon 6.0新特性
#### Babylon.js 6.0 带来了性能改进、渲染增强和一系列新功能。
- 新物理插件--新 WASM 插件和对 Babylon.js Physics API 的全面改造，高达 20 倍的速度提升
- 性能优先模式--三种可选模式（后兼容模式、中间模式、激进模式），最高可获得50 倍的渲染和性能提升
- 流体渲染
- 改进的屏幕空间反射
- 纹理贴花--新的纹理贴花功能，扩展了使用材质的灵活性
- glTF 扩展支持
- Figma设计直接导出到Babylon.js 场景中