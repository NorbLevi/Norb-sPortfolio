import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';


import Navbar from './components/navbar.jsx';
import Themes from './components/Theme';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Portfolio from './pages/portfolio/portfolio.jsx';
import Contact from './pages/contact/contact.jsx';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Themes />
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path='contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
