import React, { Component } from 'react'
import ListItem from '../listItem/listItem.js'
import './list.css'
// import PropTypes from 'prop-types'


export default class ListI extends Component {

	state = {
		data: {
			results: [],
			count: 0,
			next: ''
		},
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
				console.log(data)
			});
	}

	fetchData() {
		this.setState({ next: this.state.data.next })
		fetch(this.state.next)
			.then(response => response.json())
			.then(data => {
				this.setState({ data: { ...data, results: this.state.data.results.concat(data.results) } })
			});

	}

	handleScroll = () => {
		const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight) {
			this.fetchData();
		}
	}

	renderPokemonNames() {
		return this.state.data.results.map((item, i) => {
			const { ...pokeData } = item
			return (
				<ListItem key={i} {...pokeData} />
			)
		})
	}

	render() {
		return (
			<div className='pokemon-list-container' >
				{this.renderPokemonNames()}
			</div>
		);
	}
}