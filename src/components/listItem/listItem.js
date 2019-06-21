import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { CLIENT_RENEG_LIMIT } from 'tls';
// import PropTypes from 'prop-types'
// import ListI from '../list/list'
import { Link } from 'react-router-dom';
import {pokemonUrl} from '../../store/pokemons/actions'

class ListItem extends Component {
	state = {
		data: {
			abilities: [],
			types: [],
			sprites: {}
		},
		index: 0
	}

	pokemonUrl = url => {
		this.props.pokemonUrl(url)
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(this.props.url)
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
			});
	}
	componentDidUpdate() {
		this.fetchData();
	}

	render() {
		const { abilities, name, types, id } = this.state.data;
		const img = this.state.data.sprites.front_default
		const ability = abilities.map((el, i) => (
			<p key={el.ability.name}>{el.ability.name}</p>
		))
		const type = types.map((el,i) => (
			<p key={el.type.name}>{el.type.name}</p>
		))
		

		return (
			<div className='pokemon-list-item'>
				<img alt={id} src={img} width='300' />
				<p>{id}</p>
				<h1 onClick={()=>this.pokemonUrl(this.props.url)}><Link to={`/personal-list/${name}`}>{name}</Link></h1>
				<h2>abilities</h2>
				{ability}
				<h2>type</h2>
				{type}
			</div>
		)
	}

}

const mapStateToProps = store => {
  
	return {
		personalUrl: store.pokemonUrl,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
