import React, {Component} from 'react'
import {MoviesContext}           from '../Contexts'

// Creating component to pass data through the component tree
class MoviesProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fetched:false,
			movies:[],
			methods:{
				setMovies:this.setMovies
			}
		}
	}

	setMovies = (data)=>{
		this.setState({
			...data
		})
	}

	render() {
		const {Provider} = MoviesContext
		return <Provider value={this.state}>
			{this.props.children}
		</Provider>
	}
}

export default MoviesProvider