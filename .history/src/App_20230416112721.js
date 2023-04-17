
import { Router } from 'react-router-dom';
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
      <Home />
      <Contact />
      <About /> 
    </div>
  );
}

export default App;
 