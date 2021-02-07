import { ref, computed } from 'vue'

type Stars = {
  stars: 1 | 2 | 3 | 4 | 5
}

type Level = {
  level: number
}

type FlowerOfLife = Stars &
  Level & {
    HP: number
  }

const baseHPStats = [129, 258, 430, 645, 717]

export const useFlower = () => {
  const stars = ref<1 | 2 | 3 | 4 | 5>(5)
  const level = ref<number>(0)
  const flower = computed<FlowerOfLife>(() => ({
    stars: stars.value,
    level: level.value,
    HP:
      baseHPStats[stars.value - 1] +
      level.value * baseHPStats[stars.value - 1] * 0.28,
  }))
  return { stars, level, flower }
}
