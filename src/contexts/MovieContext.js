import { createContext, useState } from 'react';
import {v4 as uuidv4 } from 'uuid'

export const MovieContext = createContext()

const MovieContextProvider = (props) => {

  const [movies, setMovies] = useState([
    {title: 'The Fountain', director: 'Darren Aronofsky', id: uuidv4()},
    {title: 'The Master', director: 'Paul Thomas Anderson', id: uuidv4()},
    {title: 'A Fistful of Dollars', director: 'Sergio Leone', id: uuidv4()},
    {title: 'Alien', director: 'Ridley Scott', id: uuidv4()},
    {title: '2001: A Space Odyssey', director: 'Stanley Kubrick', id: uuidv4()},
  ])

  const addMovie = (title, director) => {
    setMovies([...movies, {title, director, id: uuidv4()}])
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  return (
    <MovieContext.Provider value={{movies, addMovie, deleteMovie }}>
      {props.children}
    </MovieContext.Provider>
      
  )
}

export default MovieContextProvider
