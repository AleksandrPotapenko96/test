import {
  GET_PERSONAL_URL,
  GET_PERSONAL_ID
} from './actionTypes'

export function pokemonUrl(url) {
  return { type: GET_PERSONAL_URL, url }
}

export function pokemonId(id) {
  return { type: GET_PERSONAL_ID, id }
}
