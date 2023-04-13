import { defineComponent, onMounted, ref } from "vue";
import { ArcRotateCamera, Color3, Engine, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Vector3 } from "@babylonjs/core";
export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    const createScene = (canvas: HTMLCanvasElement) => {
      const engine = new Engine(canvas)
      const scene = new Scene(engine)
      const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 12), scene)
      camera.setTarget(Vector3.Zero())
      camera.attachControl(camera, true)
      new HemisphericLight('light', new Vector3(0, 1, 0), scene)

      const roofMaterial = new StandardMaterial('material', scene)
      roofMaterial.diffuseColor = Color3.Gray()
      const roof = MeshBuilder.CreateCylinder('roof', { height: 2.4, diameter: 1.3, tessellation: 3 }, scene)
      const support = MeshBuilder.CreateBox('support', {
        width: 1.6, height: 1.3
      })
      support.position.y = 0.3
      roof.rotation.z = Math.PI / 2
      roof.position.y = 1.2
      const ground = MeshBuilder.CreateGround('ground', { width: 12, height: 12 })
      ground.position.y = -0.6
      roof.material = roofMaterial
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