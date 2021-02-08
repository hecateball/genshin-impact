export type CharacterName = 'Ganyu'
export type CharacterAscensionPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type CharacterLevel = 1 | 20 | 40 | 50 | 60 | 70 | 80 | 90

export type StatType = 'ATTACK_FLAT' | 'ATTACK_PERCENT' | 'CRITICAL_DAMAGE' | 'CRITICAL_RATE' | 'CRYO_DAMAGE'

export type Stat = {
  type: StatType
  value: number
}
