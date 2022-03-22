import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import IndexPage from './routes/Index'
import Categories from './routes/Categories'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
  // browser router connects our react app to the browser URL
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/categories" element={ <Categories /> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);