import {
  Engine,
  Scene,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  ArcRotateCamera
} from '@babylonjs/core'
import '@babylonjs/core/Debug/debugLayer' // Augments the scene with the debug methods
import '@babylonjs/inspector'
import { useFpsStore } from '../../stores/index'
/**
 * @param {*} canvas canvas对象
 */
function createScene(this: any, canvas: HTMLCanvasElement) {
  /*****************引擎*************************/
  // 创建 babylonjs 3D 引擎与较低级别的 API（如 WebGL 和 Audio）接口
  const engine = new Engine(canvas)

  /*****************场景*************************/
  // 初始化一个场景
  const scene = new Scene(engine)

  /*****************相机*************************/
  // 自由类型的相机
  // const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)
  // 旋转类型的相机
  const camera = new ArcRotateCamera(
    'camera1',
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new Vector3(0, 0, 0),
    scene
  )
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  /*****************光源*************************/
  new HemisphericLight('light', new Vector3(0, 1, 0), scene)

  /*****************模型*************************/
  //模型创建
  const box = MeshBuilder.CreateBox('box', { size: 1 }, scene)
  // 材质
  const material = new StandardMaterial('box-material', scene)
  // 添加颜色
  material.diffuseColor = Color3.Blue()
  box.material = material

  // Resize事件
  window.addEventListener('resize', () => {
    engine.resize()
  })

  engine.runRenderLoop(() => {
    scene.render()
  })
  scene.debugLayer.show()
  const fpsStore = useFpsStore()
  const fps = engine.getFps()
  fpsStore.updateFps(fps)
}
export default createScene
