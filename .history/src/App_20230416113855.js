
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          
        </Routes>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
        <Routes>
          <Route path="/contact">
            <Contact />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
