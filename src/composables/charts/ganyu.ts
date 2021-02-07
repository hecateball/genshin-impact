import { reactive } from 'vue'
import { useExpectedValues, useMaxValues } from '~/composables/systems/damage'

const NORMAL_1_HIT = [
  31.7,
  34.3,
  36.9,
  40.6,
  43.2,
  46.1,
  50.2,
  54.2,
  58.3,
  62.7,
  67.8,
]
const NORMAL_2_HIT = [
  35.6,
  38.5,
  41.4,
  45.5,
  48.4,
  51.8,
  56.3,
  60.9,
  65.4,
  70.4,
  76.1,
]
const NORMAL_3_HIT = [
  45.5,
  49.2,
  52.9,
  58.2,
  61.9,
  66.1,
  71.9,
  77.8,
  83.6,
  89.9,
  97.2,
]
const NORMAL_4_HIT = [
  45.5,
  49.2,
  52.9,
  58.2,
  61.9,
  66.1,
  71.9,
  77.8,
  83.6,
  89.9,
  97.2,
]
const NORMAL_5_HIT = [
  48.2,
  52.2,
  56.1,
  61.7,
  65.6,
  70.1,
  76.3,
  82.5,
  88.6,
  95.4,
  103.1,
]
const NORMAL_6_HIT = [
  57.6,
  62.3,
  67.0,
  73.7,
  78.4,
  83.8,
  91.1,
  98.5,
  105.9,
  113.9,
  123.1,
]

const AIMED_SHOT = [
  43.9,
  47.4,
  51.0,
  56.1,
  59.7,
  63.8,
  69.4,
  75.0,
  80.6,
  86.7,
  92.8,
]
const AIMED_SHOT_CHARGE = [
  124,
  133,
  143,
  155,
  164,
  174,
  186,
  198,
  211,
  223,
  236,
]

const FROST_FLAKE_ARROW = [
  128,
  138,
  147,
  160,
  170,
  179,
  192,
  205,
  218,
  230,
  243,
]
const FROST_FLAKE_ARROW_BLOOM = [
  218,
  234,
  250,
  272,
  288,
  305,
  326,
  348,
  370,
  392,
  413,
]

const TRAIL_OF_THE_QILIN = [132, 142, 152, 165, 175, 185, 198, 209, 224]
const CELESTIAL_SHOWER = [70, 76, 81, 88, 93, 98, 105, 112, 119]

export const useLiutianArchery = () =>
  reactive({
    expectedValues: {
      normal1: useExpectedValues(NORMAL_1_HIT),
      normal2: useExpectedValues(NORMAL_2_HIT),
      normal3: useExpectedValues(NORMAL_3_HIT),
      normal4: useExpectedValues(NORMAL_4_HIT),
      normal5: useExpectedValues(NORMAL_5_HIT),
      normal6: useExpectedValues(NORMAL_6_HIT),
      aimedShot: useExpectedValues(AIMED_SHOT),
      aimedShotCharge: useExpectedValues(AIMED_SHOT_CHARGE),
      frostFlakeArrow: useExpectedValues(FROST_FLAKE_ARROW),
      frostFlakeArrowBloom: useExpectedValues(FROST_FLAKE_ARROW_BLOOM),
    },
    maxValues: {
      normal1: useMaxValues(NORMAL_1_HIT),
      normal2: useMaxValues(NORMAL_2_HIT),
      normal3: useMaxValues(NORMAL_3_HIT),
      normal4: useMaxValues(NORMAL_4_HIT),
      normal5: useMaxValues(NORMAL_5_HIT),
      normal6: useMaxValues(NORMAL_6_HIT),
      aimedShot: useMaxValues(AIMED_SHOT),
      aimedShotCharge: useMaxValues(AIMED_SHOT_CHARGE),
      frostFlakeArrow: useMaxValues(FROST_FLAKE_ARROW),
      frostFlakeArrowBloom: useMaxValues(FROST_FLAKE_ARROW_BLOOM),
    },
  })

export const useTrailOfTheQilin = () =>
  reactive({
    expectedValues: useExpectedValues(TRAIL_OF_THE_QILIN),
    maxValues: useMaxValues(TRAIL_OF_THE_QILIN),
  })

export const useCelestialShower = () =>
  reactive({
    expectedValues: useExpectedValues(CELESTIAL_SHOWER),
    maxValues: useMaxValues(CELESTIAL_SHOWER),
  })
