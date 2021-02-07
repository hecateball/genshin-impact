import { computed, provide, inject, Ref, InjectionKey } from 'vue'
import type { CharacterName, Stat } from '~/composables/types'

type Character = {
  name: CharacterName
  level: number
  ATK: number
  specializedStats: Stat
}

const Key: InjectionKey<Ref<Character>> = Symbol()

export const provideCharacter = () => {
  const character = computed<Character>(() => ({
    name: 'Ganyu',
    level: 90,
    ATK: 335,
    specializedStats: {
      type: 'CRITICAL_DAMAGE',
      value: 38.4,
    },
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
