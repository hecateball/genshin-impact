import { ref, computed, provide, inject, Ref, InjectionKey } from 'vue'
import type { Stat, StatType } from '~/composables/types'

type WeaponName = 'アモスの弓'
type Level = 1 | 20 | 40 | 50 | 60 | 70 | 80 | 90
type AscensionPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6
type WeaponRefinement = 1 | 2 | 3 | 4 | 5

type Weapon = {
  name: WeaponName
  level: Level
  ascensionPhase: AscensionPhase
  weaponRefinement: WeaponRefinement
  ATK: number
  secondaryStat: Stat
}

const Key: InjectionKey<Ref<Weapon>> = Symbol()

export const provideWeapon = () => {
  const name = ref<WeaponName>('アモスの弓')
  const level = ref<Level>(90)
  const ascensionPhase = ref<AscensionPhase>(6)
  const weapon = computed<Weapon>(() => ({
    name: name.value,
    level: level.value,
    ascensionPhase: ascensionPhase.value,
    weaponRefinement: 1,
    ATK: baseATK(name.value, ascensionPhase.value, level.value),
    secondaryStat: {
      type: 'ATTACK_PERCENT',
      value: secondaryStatValue('ATTACK_PERCENT', level.value),
    },
  }))
  provide(Key, weapon)
}

export const useWeapon = () => {
  const weapon = inject(Key)
  if (weapon === undefined) {
    throw new Error()
  }
  return { weapon }
}

const baseATK = (name: WeaponName, ascensionPhase: AscensionPhase, level: Level) => {
  switch (name) {
    // 星5 Lv1 46武器
    case 'アモスの弓':
      switch (ascensionPhase) {
        case 6:
          return level === 90 ? 608 : 563
        case 5:
          return level === 80 ? 532 : 488
        case 4:
          return level === 70 ? 457 : 414
        case 3:
          return level === 60 ? 382 : 340
        case 2:
          return level === 50 ? 308 : 266
        case 1:
          return level === 40 ? 235 : 153
        case 0:
          return level === 20 ? 122 : 46
      }
    default:
      return 0
  }
}

const secondaryStatValue = (type: StatType, level: Level) => {
  switch (type) {
    case 'ATTACK_PERCENT':
      switch (level) {
        case 90:
          return 49.6
        case 80:
          return 45.3
        case 70:
          return 40.9
        case 60:
          return 36.5
        case 50:
          return 32.2
        case 40:
          return 27.8
        case 20:
          return 19.1
        case 1:
          return 10.8
      }
    default:
      return 0
  }
}
