// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'


// function App() {


//   return (
//     <>
    
//       <Hero></Hero>
    
//     </>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop";
import ProductDetails from "./pages/ProductDetails";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </>
  );
}

export default App;

