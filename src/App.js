import React from 'react'
import Header from './components/Header';
import {BrowserRouter , Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  extact path="/" element={ <Home/>}/>
      <Route   path="/cart" element={ <Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App