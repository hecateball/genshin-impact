export type CharacterName = 'Ganyu'

export type StatType =
  | 'ATK'
  | 'ATK%'
  | 'CRITICAL_DAMAGE'
  | 'CRITICAL_RATE'
  | 'CRYO%'

export type Stat = {
  type: StatType
  value: number
}
