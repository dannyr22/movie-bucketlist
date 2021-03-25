import { createContext, useReducer } from 'react';
import { movieReducer } from '../reducers/movieReducer';


export const MovieContext = createContext()

const MovieContextProvider = (props) => {

  const [movies, dispatch] = useReducer(movieReducer, [])

  return (
    <MovieContext.Provider value={{movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
      
  )
}

export default MovieContextProvider
