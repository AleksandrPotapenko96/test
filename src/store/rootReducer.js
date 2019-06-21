import { combineReducers, } from 'redux';
import visibilityFilter from './visibilytyFilter/reducer';
import todos from './todos/reducer';
import personalPokemon from './pokemons/reducer'
import {
  items,
  itemsHasErrored,
  itemsIsLoading
} from './data/reducer';



const todoApp = combineReducers({
  visibilityFilter,
  todos,
  personalPokemon,
  items,
  itemsHasErrored,
  itemsIsLoading
})

export default todoApp