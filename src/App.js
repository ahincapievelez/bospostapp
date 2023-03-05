import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Business from './pages/Business';
import Tech from './pages/Tech';
import Article from './components/Article';

function App() {
  
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/article/:title" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
