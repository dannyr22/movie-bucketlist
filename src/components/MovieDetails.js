import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

const MovieDetails = ({ movie }) => {
  
  const { deleteMovie } = useContext(MovieContext)

  return (
    <li onClick={() => deleteMovie(movie.id)}>
      <div>{movie.title}</div>
      <div>{movie.director}</div>
    </li>
  )
}

export default MovieDetails
