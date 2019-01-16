import React    from 'react'
import {MoviesContext} from '../Contexts'

// Creating HOC for consuming movies
export function WithMovies(Component) {
	return function() {
		return (
			<MoviesContext.Consumer>
				{
					(value) => {
						return (
							<Component data={value}/>
						)
					}
				}
			</MoviesContext.Consumer>
		)
	}
}

export default WithMovies