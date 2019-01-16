// axios make requests https://www.npmjs.com/package/axios
import axios from 'axios'

// Method  calls movie data
export const RequestMovies = (url) => {
	return axios.post(url)
}
