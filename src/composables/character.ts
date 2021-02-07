import { computed, provide, inject, Ref, InjectionKey } from 'vue'

type Character = {
  name: '甘雨'
  level: number
  attack: number
  criticalRate: number
  criticalDamage: number
}

const Key: InjectionKey<Ref<Character>> = Symbol()

const CRITICAL_RATE_BASE = 5.0
const CRITICAL_DAMAGE_BASE = 50.0

export const provideCharacter = () => {
  const character = computed<Character>(() => ({
    name: '甘雨',
    level: 90,
    attack: 335,
    criticalRate: CRITICAL_RATE_BASE,
    criticalDamage: CRITICAL_DAMAGE_BASE + 38.4,
  }))
  provide(Key, character)
}

export const useCharacter = () => {
  const character = inject(Key)
  if (character === undefined) {
    throw new Error()
  }
  return { character }
}
