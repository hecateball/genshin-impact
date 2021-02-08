import { StatType } from '~/composables/types'

type Artifact = {
  mainStat: {
    type: StatType
    value: number
  }
  subStats: {
    type: StatType
    value: number
  }[]
}

type Name = 'IcebreakersResolve'

type Plume = Artifact & {
  name: 'IcebreakersResolve'
}

const usePlume = () => {}
