import { defineComponent, onMounted, ref } from "vue";
import createScreen from "./createScreen";
export default defineComponent({
  setup() {
    const canvasRef = ref(null)
    onMounted(() => {
      if (canvasRef.value) {
        createScreen(canvasRef.value)
      }
    })
    return () => (<div><canvas ref={canvasRef} id="renderCanvas"></canvas></div>)
  }
})