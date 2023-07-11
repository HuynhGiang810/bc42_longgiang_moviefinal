
import './App.css';
import Home from './modules/Home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import MovieDetails from './modules/MovieDetails/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
