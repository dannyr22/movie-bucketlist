import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <li>
      <div>{movie.title}</div>
      <div>{movie.director}</div>
    </li>
  )
}

export default MovieDetails
