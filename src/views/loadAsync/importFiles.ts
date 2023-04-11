import { SceneLoader, Engine } from '@babylonjs/core'
import '@babylonjs/loaders'
import '@babylonjs/core/Debug/debugLayer' // Augments the scene with the debug methods
import '@babylonjs/inspector'

const import3DFiles = (canvas: HTMLCanvasElement, assetsUrl: string, assetsName: string) => {
  const engine = new Engine(canvas)
  // Resize事件
  window.addEventListener('resize', () => {
    engine.resize()
  })
  SceneLoader.LoadAsync(assetsUrl, assetsName).then((scene) => {
    scene.whenReadyAsync().then(() => {
      // 创建默认相机
      scene.createDefaultCamera(true)
      scene.activeCamera?.attachControl(canvas, true)
      // 创建默认光
      scene.createDefaultLight()
      // 不断循环渲染
      engine.runRenderLoop(() => {
        scene.render()
      })
      scene.debugLayer.show()
    })
  })
}
export { import3DFiles }
