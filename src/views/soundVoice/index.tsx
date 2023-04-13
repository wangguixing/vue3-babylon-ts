import { onMounted, ref, defineComponent } from "vue";
import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, Sound, StandardMaterial, Vector3 } from "@babylonjs/core";
export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    const createScene = (canvas: HTMLCanvasElement) => {
      const engine = new Engine(canvas)
      const scene = new Scene(engine)
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
      new HemisphericLight('light', new Vector3(0, 0, 0), scene)

      const box = MeshBuilder.CreateBox('box1', { size: 1 }, scene)
      const material = new StandardMaterial('material', scene)
      material.diffuseColor = Color3.Purple()
      box.material = material
      const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10 })
      ground.position.y = -1

      const sound = new Sound('sound', '/src/assets/mp3/2405819446.mp3', scene, null,
        // 循环自动播放
        {
          loop: true, autoplay: true
        })
      // 每3秒播放一次
      // setInterval(() => sound.play(), 3000)
      sound.play()

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
      <div><canvas ref={canvasRef}></canvas></div>
    )
  }
})