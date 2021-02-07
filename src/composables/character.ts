import { ref, reactive, onBeforeUnmount, provide, inject, Ref, InjectionKey } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import type { CharacterName, CharacterAscensionPhase, CharacterLevel, Stat, StatType } from '~/composables/types'

type Character = {
  name: CharacterName
  ascensionPhase: CharacterAscensionPhase
  level: CharacterLevel
  ATK: number
  specializedStats: Stat
}

const Key: InjectionKey<Ref<Character>> = Symbol()

const converter: firebase.firestore.FirestoreDataConverter<Character> = {
  fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot) {
    return {
      name: snapshot.get('name'),
      ascensionPhase: snapshot.get('ascensionPhase'),
      level: snapshot.get('level'),
      ATK: baseATK(snapshot.get('name'), snapshot.get('ascensionPhase'), snapshot.get('level')),
      specializedStats: {
        type: specializeStatsType(snapshot.get('name')),
        value: specializedStatsValue(specializeStatsType(snapshot.get('name')), snapshot.get('ascensionPhase')),
      },
    }
  },
  toFirestore(character: Character) {
    return {
      name: character.name,
      ascensionPhase: character.ascensionPhase,
      level: character.level,
      specializedStatsType: character.specializedStats.type,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
  },
}

const baseATK = (name: CharacterName, ascensionPhase: CharacterAscensionPhase, level: CharacterLevel) => {
  switch (name) {
    case 'Ganyu':
      switch (ascensionPhase) {
        case 6:
          return level === 90 ? 335 : 311
        case 5:
          return level === 80 ? 295 : 272
        case 4:
          return level === 70 ? 256 : 233
        case 3:
          return level === 60 ? 217 : 194
        case 2:
          return level === 50 ? 173 : 151
        case 1:
          return level === 40 ? 135 : 90
        case 0:
          return level === 20 ? 68 : 28
      }
    default:
      return 0
  }
}

const specializeStatsType = (name: CharacterName): StatType => {
  switch (name) {
    case 'Ganyu':
      return 'CRITICAL_DAMAGE'
    default:
      return 'ATK'
  }
}

const specializedStatsValue = (type: StatType, ascensionPhase: CharacterAscensionPhase) => {
  switch (type) {
    case 'CRITICAL_DAMAGE':
      switch (ascensionPhase) {
        case 6:
          return 38.4
        case 5:
          return 28.8
        case 4:
        case 3:
          return 19.2
        case 2:
          return 9.6
        case 1:
        case 0:
          return 0
      }
    default:
      return 0
  }
}

export const provideCharacter = () => {
  const character = ref<Character>({
    name: 'Ganyu',
    ascensionPhase: 0,
    level: 1,
    ATK: baseATK('Ganyu', 0, 1),
    specializedStats: {
      type: specializeStatsType('Ganyu'),
      value: specializedStatsValue(specializeStatsType('Ganyu'), 0),
    },
  })
  const unsubscribe = firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser!.uid)
    .collection('characters')
    .doc('Ganyu')
    .withConverter(converter)
    .onSnapshot((snapshot) => {
      if (!snapshot.exists) {
        return
      }
      character.value = snapshot.data() as Character
    })
  onBeforeUnmount(unsubscribe)
  provide(Key, character)
}

export const useCharacter = () => {
  const character = inject(Key)
  if (character === undefined) {
    throw new Error()
  }
  return { character }
}

export const useCharacters = () => {
  const characters = ref<Character[]>([])
  const reference = firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser!.uid)
    .collection('characters')
    .withConverter(converter)
  const unsubscribe = reference.orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
    characters.value = snapshot.docs.map((doc) => doc.data())
    if (characters.value.length !== 0) {
      return
    }
    reference.doc('Ganyu').set({
      name: 'Ganyu',
      ascensionPhase: 0,
      level: 1,
      ATK: baseATK('Ganyu', 0, 1),
      specializedStats: {
        type: specializeStatsType('Ganyu'),
        value: specializedStatsValue(specializeStatsType('Ganyu'), 0),
      },
    })
  })
  onBeforeUnmount(unsubscribe)
  return { characters }
}

export const useCreateCharacter = () => {
  const input = reactive<{
    name: CharacterName
    ascensionPhase: CharacterAscensionPhase
    level: CharacterLevel
  }>({
    name: 'Ganyu',
    ascensionPhase: 6,
    level: 90,
  })
  const createCharacter = async () => {
    const reference = firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser!.uid)
      .collection('characters')
      .doc(input.name)
      .withConverter(converter)
    await reference.set({
      name: input.name,
      ascensionPhase: input.ascensionPhase,
      level: input.level,
      ATK: baseATK(input.name, input.ascensionPhase, input.level),
      specializedStats: {
        type: specializeStatsType(input.name),
        value: specializedStatsValue(specializeStatsType(input.name), input.ascensionPhase),
      },
    })
    input.name = 'Ganyu'
    input.ascensionPhase = 6
    input.level = 90
  }
  return { createCharacter, input }
}
