import { ref, provide, inject, Ref, InjectionKey } from 'vue'
import type { Stat } from '~/composables/types'
import { WEAPON_MASTER } from '~/assets/weapon-master'

export type Name = 'AmosBow'
export type WeaponType = 'Bows' | 'Catalysts' | 'Claymores' | 'Polearms' | 'Swords'
export type Level = 1 | 20 | 40 | 50 | 60 | 70 | 80 | 90
export type AscensionPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6
type WeaponRefinement = 1 | 2 | 3 | 4 | 5

type Weapon = {
  name: Name
  type: WeaponType
  level: Level
  ascensionPhase: AscensionPhase
  weaponRefinement: WeaponRefinement
  ATK: number
  secondaryStat: Stat
}

const Value: InjectionKey<Ref<Weapon>> = Symbol()
const Setter: InjectionKey<(value: Weapon) => void> = Symbol()

export const provideWeapon = () => {
  const name = 'AmosBow'
  const weapon = ref<Weapon>({
    name,
    type: WEAPON_MASTER[name].type,
    level: 90,
    ascensionPhase: 6,
    weaponRefinement: 1,
    ATK: WEAPON_MASTER[name].attack['6']['90']!,
    secondaryStat: {
      type: WEAPON_MASTER[name].secondaryStatType,
      value: WEAPON_MASTER[name].secondaryStatValue['90'],
    },
  })
  const setWeapon = (value: Weapon) => {
    weapon.value = value
  }
  provide(Value, weapon)
  provide(Setter, setWeapon)
}

export const useWeapon = () => {
  const weapon = inject(Value)
  const setWeapon = inject(Setter)
  if (weapon === undefined || setWeapon === undefined) {
    throw new Error()
  }
  return { weapon, setWeapon }
}

export const useWeapons = () => {
  const weapons = ref<Weapon[]>([])
  return { weapons }
}
