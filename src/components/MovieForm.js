import {useContext, useState} from 'react'
import { MovieContext } from '../contexts/MovieContext'

const MovieForm = () => {

  const { addMovie } = useContext(MovieContext)

  const [title, setTitle] = useState('')
  const [director, setDirector]  = useState('')
  
  const movieSubmitHandler = (e) => {
    e.preventDefault()
    addMovie(title, director)
    setTitle('')
    setDirector('')
  }
  return (
    <div>
      <form onSubmit={movieSubmitHandler}>
        <input type="text" value={title} placeholder="movie title" onChange={(e) => setTitle(e.target.value) }/>
        <input type="text" value={director} placeholder="director" onChange={(e) => setDirector(e.target.value)} />
        <input type="submit" value="add movie"/>
      </form>
    </div>
  )
}

export default MovieForm
