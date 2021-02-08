export type StatType = 'ATTACK_FLAT' | 'ATTACK_PERCENT' | 'CRITICAL_DAMAGE' | 'CRITICAL_RATE' | 'CRYO_DAMAGE'

export type Stat = {
  type: StatType
  value: number
}
