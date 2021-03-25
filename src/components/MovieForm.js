import {useContext, useState} from 'react'
import { MovieContext } from '../contexts/MovieContext'

const MovieForm = () => {

  const { dispatch } = useContext(MovieContext)

  const [title, setTitle] = useState('')
  const [director, setDirector]  = useState('')
  
  const movieSubmitHandler = (e) => {
    e.preventDefault()
    dispatch({type: 'ADD_MOVIE', movie: {
      title,
      director
    }})
    setTitle('')
    setDirector('')
  }
  return (
    <div>
      <form onSubmit={movieSubmitHandler}>
        <input type="text" value={title} placeholder="movie title" required onChange={(e) => setTitle(e.target.value) }/>
        <input type="text" value={director} placeholder="director" required onChange={(e) => setDirector(e.target.value)} />
        <input type="submit" value="add movie"/>
      </form>
    </div>
  )
}

export default MovieForm
