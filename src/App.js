import React    from 'react'
import Movies   from './containers/Movies/index'
import Provider from './Store/Providers/MoviesProvider'

class App extends React.Component {
	render() {
		return <Provider>
			<Movies/>
		</Provider>
	}
}

export default App