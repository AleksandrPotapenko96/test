import {
  GET_PERSONAL_URL,
} from './actionTypes'

export default function pokemonUrl(state = {}, action){
	switch(action.type){
		case GET_PERSONAL_URL:
			return { ...state, personalUrl: action.url}
		default:
			return state
	}
}

