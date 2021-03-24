import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import MovieForm from "./MovieForm";
import MovieDetails from './MovieDetails'

const MovieList = () => {
  const { movies } = useContext(MovieContext)
  return (
    <div>
      <ul className="movielist">
        {movies.map(movie => <MovieDetails movie={movie} key={movie.id}/>
        )}
      </ul>
      <MovieForm />
    </div>
  )
}

export default MovieList
