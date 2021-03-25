import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

import MovieDetails from './MovieDetails'

const MovieList = () => {
  const { movies } = useContext(MovieContext)
  return movies.length ? (
    <div>
      <ul className="movielist">
        {movies.map(movie => <MovieDetails movie={movie} key={movie.id}/>
        )}
      </ul>
    </div>
  ) : (
      <div>There are no movies :( </div>
  )
 
}

export default MovieList
