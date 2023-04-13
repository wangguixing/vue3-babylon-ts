import { defineComponent, onMounted, ref } from "vue";
import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Tools, Vector3 } from "@babylonjs/core";
export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    const createScene = (canvas: HTMLCanvasElement) => {
      const engine = new Engine(canvas)
      const scene = new Scene(engine)
      new HemisphericLight('light', new Vector3(0, 1, 0), scene)
      const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 12, 8), scene)
      camera.setTarget(Vector3.Zero())
      camera.attachControl(canvas, true)

      const material = new StandardMaterial('material', scene)
      material.diffuseColor = Color3.Yellow()
      const ground = MeshBuilder.CreateGround('ground', { width: 12, height: 12 })
      ground.position.y = -0.75
      // const box = BABYLON.MeshBuilder.CreateBox("box", {width: 2, height: 1.5, depth: 3})
      const box1 = MeshBuilder.CreateBox('box1', {}, scene)
      const box2 = MeshBuilder.CreateBox('box2', {}, scene)
      const box3 = MeshBuilder.CreateBox('box3', {}, scene)
      // 缩放
      // 写法一
      // box1.scaling.x = 2
      // box1.scaling.y = 1.5
      // box1.scaling.z = 3
      // 写法二
      box1.scaling = new Vector3(2, 1.5, 3)
      box2.scaling = new Vector3(2, 1.5, 3)
      box3.scaling = new Vector3(2, 1.5, 3)
      // 位置与旋转
      box1.position.x = 4
      // box2.rotation.y = Tools.ToRadians(45)
      box2.rotation.y = Math.PI / 4
      box3.position.x = -4

      engine.runRenderLoop(() => {
        scene.render()
      })
    }
    onMounted(() => {
      if (canvasRef.value) {
        createScene(canvasRef.value)
      }
    })
    return () => (<div><canvas ref={canvasRef}></canvas></div>)
  }
})