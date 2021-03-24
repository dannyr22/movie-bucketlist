import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import MovieForm from "./MovieForm";
import MovieDetails from './MovieDetails'

const MovieList = () => {
  const { movies } = useContext(MovieContext)
  return movies.length ? (
    <div>
      <ul className="movielist">
        {movies.map(movie => <MovieDetails movie={movie} key={movie.id}/>
        )}
      </ul>
      <MovieForm />
    </div>
  ) : (
      <div>There are no moives :( </div>
  )
}

export default MovieList
