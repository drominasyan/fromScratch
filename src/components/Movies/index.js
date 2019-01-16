import React from 'react'

function Movies(props) {
	return (props.data.movies.map(
			(item, index) => {
				return <div className="card" key={index}>
					<div className="img-content">
						<img width={185} height={278}
						     src={item.poster_path
							     ? `http://image.tmdb.org/t/p/w185/${item.poster_path}`
							     : MovieBackground}
						     alt="alt"/>
						<div className="cardFooter">
							{item.title}
						</div>
					</div>
				</div>
			})
	)
}

export default Movies

