import { defineComponent, ref, onMounted } from "vue";
import { import3DFiles } from "./importFiles";
export default defineComponent({
  setup() {
    const canvasRef = ref(null);
    onMounted(() => {
      if (canvasRef.value) {
        import3DFiles(canvasRef.value, '/src/assets/3dModel/', 'Earth.glb')
      }
    });
    return () => (
      <div><canvas ref={canvasRef} id="renderCanvas"></canvas></div>
    )
  },
})