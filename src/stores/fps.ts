import { defineStore } from 'pinia'

export const useFpsStore = defineStore('fps', {
  state: () => ({
    fps: 0
  }),
  actions: {
    updateFps(fpsValue: number) {
      this.fps = fpsValue
    }
  }
})
