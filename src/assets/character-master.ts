import type { Name, AscensionPhase, Level } from '~/composables/character'
import type { StatType } from '~/composables/types'

export const CHARACTER_MASTER: {
  [name in Name]: {
    attack: {
      [phase in AscensionPhase]: { [level in Level]?: number }
    }
    specializedStatType: StatType
    specializedStatValue: {
      [phase in AscensionPhase]: number
    }
  }
} = {
  Ganyu: {
    attack: {
      '0': { '1': 28, '20': 68 },
      '1': { '20': 90, '40': 135 },
      '2': { '40': 151, '50': 173 },
      '3': { '50': 194, '60': 217 },
      '4': { '60': 233, '70': 256 },
      '5': { '70': 272, '80': 295 },
      '6': { '80': 311, '90': 335 },
    },
    specializedStatType: 'CRITICAL_DAMAGE',
    specializedStatValue: {
      '0': 0,
      '1': 0,
      '2': 9.6,
      '3': 19.2,
      '4': 19.2,
      '5': 28.8,
      '6': 38.4,
    },
  },
}
