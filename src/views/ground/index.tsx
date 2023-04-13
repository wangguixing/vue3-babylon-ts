
import { MeshBuilder, Engine, HemisphericLight, Scene, Vector3, StandardMaterial, Color3, ArcRotateCamera } from "@babylonjs/core";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    const createScene = (canvasContainer: HTMLCanvasElement) => {
      const engine = new Engine(canvasContainer)

      // Resize事件
      window.addEventListener('resize', () => {
        engine.resize()
      })

      const scene = new Scene(engine)
      // 往场景中增加相机，并给相机增加向量坐标
      const camera = new ArcRotateCamera(
        'camera1',
        -Math.PI / 2,
        Math.PI / 2.5,
        3,
        new Vector3(0, 0, 0),
        scene
      )
      camera.setTarget(Vector3.Zero())
      camera.attachControl(canvasContainer, true)

      //增加light
      new HemisphericLight('light', new Vector3(0, 2, 0), scene)

      // 往场景中增加box
      const box = MeshBuilder.CreateBox('box', { size: 1 }, scene)
      const material = new StandardMaterial('box-material', scene)
      material.diffuseColor = Color3.Gray()
      box.material = material

      const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10 })
      ground.position.y = -0.5

      // 渲染场景
      engine.runRenderLoop(() => {
        scene.render()
      })
    }
    onMounted(() => {
      if (canvasRef.value) {
        createScene(canvasRef.value)
      }
    })

    return () => (
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>
    )
  }
})