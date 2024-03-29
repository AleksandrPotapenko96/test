// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
import {
  ADD_TODO,
  TOGGLE_TODO,
} from './actionTypes'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'




export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function setVisibilityFilter(filter, data) {
  return { type: SET_VISIBILITY_FILTER, filter, data }
}