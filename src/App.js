import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Business from './pages/Business';
import Tech from './pages/Tech';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
