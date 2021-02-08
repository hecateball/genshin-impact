import { StatType } from '~/composables/types'
import { Level, Name, WeaponType, AscensionPhase } from '~/composables/equipments/weapon'

export const WEAPON_MASTER: {
  [name in Name]: {
    type: WeaponType
    attack: { [phase in AscensionPhase]: { [level in Level]?: number } }
    secondaryStatType: StatType
    secondaryStatValue: { [level in Level]: number }
  }
} = {
  AmosBow: {
    type: 'Bows',
    attack: {
      '0': { '1': 46, '20': 122 },
      '1': { '20': 153, '40': 235 },
      '2': { '40': 266, '50': 308 },
      '3': { '50': 340, '60': 382 },
      '4': { '60': 414, '70': 457 },
      '5': { '70': 488, '80': 532 },
      '6': { '80': 563, '90': 608 },
    },
    secondaryStatType: 'ATTACK_PERCENT',
    secondaryStatValue: {
      '1': 10.8,
      '20': 19.1,
      '40': 27.8,
      '50': 32.2,
      '60': 36.5,
      '70': 40.9,
      '80': 45.3,
      '90': 49.6,
    },
  },
}
