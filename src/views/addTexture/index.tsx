/*
 * @Author: wangguixing
 * @Date: 2023-08-21 09:56:45
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-08-24 10:13:19
 * @FilePath: \src\views\addTexture\index.tsx
 */
import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    onMounted(() => {
      if (canvasRef.value) {
        create3D(canvasRef.value)
      }
    })

    const create3D = (canvas: HTMLCanvasElement) => {
      const engine = new Engine(canvas)
      const scene = new Scene(engine)
      const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 12), scene)
      camera.setTarget(Vector3.Zero())
      camera.attachControl(canvas, true)

      new HemisphericLight('light', new Vector3(0, 1, 0), scene)

      engine.runRenderLoop(() => {
        scene.render()
      })

      // 房顶
      const roof = MeshBuilder.CreateCylinder('roof', { height: 2.4, diameter: 1.3, tessellation: 3 }, scene)
      roof.position.y = 1.2
      roof.rotation.z = Math.PI / 2
      const roofMaterial = new StandardMaterial('roofMaterial', scene)
      roofMaterial.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/roof.jpg", scene)
      roof.material = roofMaterial
      // 房子支撑柱子
      const support = MeshBuilder.CreateBox('support', { width: 1.6, height: 1.3 })
      support.position.y = 0.3
      const supportMat = new StandardMaterial("supportMat");
      supportMat.diffuseTexture = new Texture("https://www.babylonjs-playground.com/textures/floor.png");
      support.material = supportMat
      // 地面
      const ground = MeshBuilder.CreateGround('ground', { width: 12, height: 12 })
      ground.position.y = -0.5
      const groundMat = new StandardMaterial('roofMaterial')
      groundMat.diffuseColor = new Color3(0, 1, 0)
      ground.material = groundMat
    }
    return () => (<div><canvas ref={canvasRef}></canvas></div>)
  }
})