import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllCats from './components/AllCats';
import Navbar from './components/NavBar';
import FavoriteCats from './components/FavoriteCats';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/frontend-challenge/' element={<AllCats />} />
          <Route exact path='/frontend-challenge/favorites' element={<FavoriteCats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
