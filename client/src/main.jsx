import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <App />
    <Footer/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
