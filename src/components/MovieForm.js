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
        <input type="text" id="title" value={title} placeholder="Movie Title" required onChange={(e) => setTitle(e.target.value) }/>
        <input type="text" id="director" value={director} placeholder="Director" required onChange={(e) => setDirector(e.target.value)} />
        <input type="submit" value="Add Movie"/>
      </form>
    </div>
  )
}

export default MovieForm
