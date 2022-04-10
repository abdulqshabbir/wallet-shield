import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import IndexPage from "./routes/Index"
import Categories from "./routes/Categories"
import Transaction from "./routes/Transaction"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoriesProvider from "./contexts/Categories"
import ExpensesProvider from "./contexts/Expenses"

ReactDOM.render(
  // browser router connects our react app to the browser URL
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <ExpensesProvider>
          <Routes>
              <Route path="/" element={ <IndexPage /> } />
              <Route path="/categories" element={ <Categories /> } />
              <Route path="/transaction" element={ <Transaction /> } />
          </Routes>
        </ExpensesProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

