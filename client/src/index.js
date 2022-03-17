import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import IndexPage from './routes/Index'
import AddTransaction from './routes/AddTransaction'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
  // browser router connects our react app to the browser URL
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/add-transaction" element={ <AddTransaction/> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);