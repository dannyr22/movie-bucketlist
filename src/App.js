
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieForm from "./components/MovieForm";
import MovieContextProvider from "./contexts/MovieContext";
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <MovieForm />
      </MovieContextProvider>
      
    </div>
  );
}

export default App;
