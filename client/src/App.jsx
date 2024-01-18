import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './Components/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Auth/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route element={<Home/>} path="/" />
    <Route element={<SingleProduct/>} path="/products/:id" />
    <Route element={<Cart/>} path="/cart" />
    <Route element={<Login/>} path="/login" />
    <Route element={<Register/>} path="/register" />
    <Route element={<Layout/>} path="/auth" />
  </Routes>

  );
}

export default App
