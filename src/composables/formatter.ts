import type { CharacterName, StatType } from '~/composables/types'

export const useFormatName = () => {
  const formatName = (name: CharacterName) => {
    switch (name) {
      case 'Ganyu':
        return '甘雨'
      default:
        return '(Unknown)'
    }
  }
  return { formatName }
}

export const useFormatStatType = () => {
  const formatStatType = (type: StatType) => {
    switch (type) {
      case 'ATK%':
        return '攻撃力(%)'
      case 'CRITICAL_DAMAGE':
        return '会心ダメージ(%)'
      default:
        return '(Unknown)'
    }
  }
  return { formatStatType }
}
