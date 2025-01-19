import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import AllCats from './components/AllCats';
import FavoriteCats from './components/FavoriteCats';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<AllCats />} />
          <Route exact path='/favorites' element={<FavoriteCats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
