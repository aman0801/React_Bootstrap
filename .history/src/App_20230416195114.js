import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Bar from './components/inc/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Bar />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <Routes>
                <Route exa path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
