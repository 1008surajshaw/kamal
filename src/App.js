import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Routes   } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Recipes from './pages/Recipes';
import WhereToBuy from './pages/WhereToBuy';
import Contact from './pages/Contact';


function App() {
  return (
    <div className=" min-h-screen  flex flex-col font-inter overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Products />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/buy' element={<WhereToBuy/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
