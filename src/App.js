import './App.css';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Home from './Home/Home';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
