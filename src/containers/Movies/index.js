import React, {Component} from 'react'
import {RequestMovies}    from '../../api/index' // Simple module for post request
import Movies             from '../../components/Movies/index' // Movies single component
import {MoviesContext}    from '../../Store/Contexts'
import "./style.css"
//import WithMovies         from '../../Store/Consumers/WithMovies' // HOC for consuming context data

class MoviesContainer extends Component {
	static contextType = MoviesContext
	state = {
		width: 0,
	}

	componentDidMount() {
		RequestMovies(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=418a2c57e3a40a68638d0017f189fca9')
			.then((response) => {
				this.context.methods.setMovies({
					fetched: true,
					movies: response.data.results,
				})
				const images = []
				let counter = 0
				response.data.results.map((item, index,array) => {
					images[index] = new Image()
					images[index].src = 'http://image.tmdb.org/t/p/w185/' +
						item.poster_path
					images[index].onload = () => {
						counter+=1;
						let width = (counter*100)/array.length
						this.setState({
							width:width
						})
					}
				})
			})
	}

	render() {
		console.log(this.state.width)
		const loader = {
			width:`${this.state.width}%`,
			background:"red",
			color:"white"
		}

		return (
			this.state.width === 100 ?
				<Movies data={this.context}/> :
				<div className={"progressBar"}>
					<div style={loader}>Loader ...</div>
				</div>
		)
	}
}

// WithMovies is a HOC and return component with movies data
export default MoviesContainer