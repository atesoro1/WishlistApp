import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Wishlist from "./components/Wishlist";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Hero />}/>
              <Route exact path="/cards" element={<Cards />}/>
              <Route exact path="/wishlist" element={<Wishlist />}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
