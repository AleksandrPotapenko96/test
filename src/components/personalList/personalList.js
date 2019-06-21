import React, { Component } from 'react'
import { connect } from 'react-redux'
import {pokemonUrl} from '../../store/pokemons/actions'





class PersonalList extends Component {
	
	state = {
		data: {
			abilities: [],
			types: [],
			sprites: {}
		},
		index: 0
	}
	
	componentDidMount() {
		fetch(this.props.personalUrl)
			.then(response => response)
			.then(data => {
				this.setState({ data })
			});
	}
	
	render(){
		console.log(this.state.data)

		return(
			<div>
				<p>{}</p>
			</div>
		)
	}
}

const mapStateToProps = store => {
  
	return {
		personalUrl: store.personalPokemon,
		text: store.addTodo,
		index: store.toggleTodo,
		filter: store.setVisibilityFilter

		// imageRotate: store.rotateClass
	}
}

const mapDispatchToProps = dispatch => {
	return {
		pokemonUrl: personalUrl => {
			dispatch(pokemonUrl(personalUrl))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalList)