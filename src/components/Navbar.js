import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = () => {

  const {movies} = useContext(MovieContext)
  return (
    <nav>
      <h1>Movies to watch before you die</h1>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div>You have {movies.length} movies left to watch</div>
    </nav>
  )
}

export default Navbar
