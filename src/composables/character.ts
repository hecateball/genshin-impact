import { ref, reactive, onBeforeUnmount, provide, inject, Ref, InjectionKey } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import type { Stat } from '~/composables/types'
import { CHARACTER_MASTER } from '~/assets/character-master'

export type Name = 'Ganyu'
export type AscensionPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Level = 1 | 20 | 40 | 50 | 60 | 70 | 80 | 90

type Character = {
  name: Name
  ascensionPhase: AscensionPhase
  level: Level
  attack: number
  specializedStat: Stat
}

const Key: InjectionKey<Ref<Character>> = Symbol()

const converter: firebase.firestore.FirestoreDataConverter<Character> = {
  fromFirestore: (snapshot) => {
    const name = snapshot.get('name') as Name
    const ascensionPhase = snapshot.get('ascensionPhase') as AscensionPhase
    const level = snapshot.get('level') as Level
    return {
      name,
      ascensionPhase,
      level,
      attack: CHARACTER_MASTER[name].attack[ascensionPhase][level]!,
      specializedStat: {
        type: CHARACTER_MASTER[name].specializedStatType,
        value: CHARACTER_MASTER[name].specializedStatValue[ascensionPhase],
      },
    }
  },
  toFirestore: () => {
    throw new ReferenceError()
  },
}

export const provideCharacter = () => {
  const name = 'Ganyu'
  const ascensionPhase = 0
  const level = 1
  const character = ref<Character>({
    name,
    ascensionPhase,
    level,
    attack: CHARACTER_MASTER[name].attack[ascensionPhase][level]!,
    specializedStat: {
      type: CHARACTER_MASTER[name].specializedStatType,
      value: CHARACTER_MASTER[name].specializedStatValue[ascensionPhase],
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
  const reference = firebase.firestore().collection('users').doc(firebase.auth().currentUser!.uid).collection('characters')
  const unsubscribe = reference
    .withConverter(converter)
    .orderBy('createdAt', 'desc')
    .onSnapshot(async (snapshot) => {
      characters.value = snapshot.docs.map((doc) => doc.data())
      if (characters.value.length !== 0) {
        return
      }
      await reference.doc('Ganyu').set({
        name: 'Ganyu',
        ascensionPhase: 0,
        level: 1,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    })
  onBeforeUnmount(unsubscribe)
  return { characters }
}

export const useCreateCharacter = () => {
  const input = reactive<{
    name: Name
    ascensionPhase: AscensionPhase
    level: Level
  }>({
    name: 'Ganyu',
    ascensionPhase: 6,
    level: 90,
  })
  const createCharacter = async () => {
    await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser!.uid)
      .collection('characters')
      .doc(input.name)
      .set({
        name: input.name,
        ascensionPhase: input.ascensionPhase,
        level: input.level,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    input.name = 'Ganyu'
    input.ascensionPhase = 6
    input.level = 90
  }
  return { createCharacter, input }
}
