import React from 'react';
import { connect } from 'react-redux'
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './components/app/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import todoApp from './store/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	addTodo,
	toggleTodo,
} from './store/todos/actions'
import{ setVisibilityFilter,
	VisibilityFilters
} from './store/visibilytyFilter/action'
import {pokemonUrl} from './store/pokemons/actions.js'

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)))
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// debugger;
// Dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// store.dispatch(pokemonUrl( "fgfxthfxdhb"))
// store.dispatch(pokemonUrl( "fgfxthfxdhb"))
// store.dispatch(pokemonUrl( "fgfxthfxdhb"))
// store.dispatch(pokemonUrl( "zgdsvgdg"))




// unsubscribe()


ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
	, document.getElementById('root'));

	const mapStateToProps = store => {
  
		return {
			url: store.pokemonUrl,
			text: store.addTodo,
			index: store.toggleTodo,
			filter: store.setVisibilityFilter

			// imageRotate: store.rotateClass
		}
	}
	
	const mapDispatchToProps = dispatch => {
		return {
			pokemonUrl: url => dispatch(pokemonUrl(url))
		}
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
