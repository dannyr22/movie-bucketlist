import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = () => {

  const {movies} = useContext(MovieContext)
  return (
    <nav>
      <h1>Movies To Watch Before You Kick The Bucket</h1>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <p>You have {movies.length} movies left to watch</p>
    </nav>
  )
}

export default Navbar
