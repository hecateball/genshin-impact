import { computed } from 'vue'
import { useCharacter } from '~/composables/character'
import { useWeapon } from '~/composables/equipments/weapon'

const summationReducer: (previousValue: number, currentValue: number) => number = (previousValue, currentValue) =>
  previousValue + currentValue

export const useAttack = () => {
  const { character } = useCharacter()
  const { weapon } = useWeapon()
  const subStats = [character.value.specializedStats, weapon.value.secondaryStat]
  const attack = computed<number>(() => {
    const ATKBonus = subStats
      .filter((stat) => stat.type === 'ATTACK_PERCENT')
      .map((stat) => stat.value / 100)
      .reduce(summationReducer, 1.0)
    const ATKFlatBonus = subStats
      .filter((stat) => stat.type === 'ATTACK_FLAT')
      .map((stat) => stat.value)
      .reduce(summationReducer, 0)
    return Math.floor((character.value.ATK + weapon.value.ATK) * ATKBonus) + ATKFlatBonus
  })
  return { attack }
}

export const useCriticalRate = () => {
  const criticalRate = computed<number>(() => {
    return 5 / 100
  })
  return { criticalRate }
}

export const useCriticalDamageRate = () => {
  const { character } = useCharacter()
  const { weapon } = useWeapon()
  const subStats = [character.value.specializedStats, weapon.value.secondaryStat]
  const criticalDamageRate = computed<number>(() =>
    subStats
      .filter((stat) => stat.type === 'CRITICAL_DAMAGE')
      .map((stat) => stat.value / 100)
      .reduce(summationReducer, 1.5)
  )
  return { criticalDamageRate }
}

export const useDamageBonusRate = (types: string[]) => {
  const damageBonusRate = computed<number>(() => {
    return 100 / 100
  })
  return { damageBonusRate }
}
