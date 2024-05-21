import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './components/Home/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>,
);
