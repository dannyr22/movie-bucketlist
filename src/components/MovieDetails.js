import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

const MovieDetails = ({ movie }) => {
  
  const { dispatch } = useContext(MovieContext)

  return (
    <li className="movie-details" onClick={() => dispatch({type: 'DELETE_MOVIE', id: movie.id})}>
      <div>{movie.title}</div>
      <div>{movie.director}</div>
    </li>
  )
}

export default MovieDetails
