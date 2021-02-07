import { computed } from 'vue'
import { useAttack, useCriticalRate, useCriticalDamageRate } from '~/composables/systems/attributes'

export const useExpectedValues = (skillDamageRates: number[]) => {
  const { attack } = useAttack()
  const { criticalRate } = useCriticalRate()
  const { criticalDamageRate } = useCriticalDamageRate()
  return computed<number[]>(() =>
    skillDamageRates
      .map((skillDamageRate) => (attack.value * skillDamageRate) / 100)
      .map((damage) => damage * (1 + (criticalDamageRate.value - 1) * criticalRate.value))
      .map(Math.floor)
  )
}

export const useMaxValues = (skillDamageRates: number[]) => {
  const { attack } = useAttack()
  const { criticalDamageRate } = useCriticalDamageRate()
  return computed<number[]>(() =>
    skillDamageRates
      .map((skillDamageRate) => (attack.value * skillDamageRate) / 100)
      .map((damage) => damage * criticalDamageRate.value)
      .map(Math.floor)
  )
}
