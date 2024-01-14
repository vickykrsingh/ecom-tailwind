import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './Components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<SingleProduct/>} path="/products/:id" />
    <Route element={<Cart/>} path="/cart" />
  </Routes>

  );
}

export default App
