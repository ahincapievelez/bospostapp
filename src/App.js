import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import { news } from "./data"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Business from './pages/Business';
import Tech from './pages/Tech';

function App() {

  let [newsData, setNewsData] = useState(null)

  useEffect(() => {
    getNews()
  }, []);

  async function getNews(){
    let data = await news()
    setNewsData(data)
    console.log(data)
  }

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home news={newsData}/>} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
