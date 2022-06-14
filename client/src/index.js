import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import IndexPage from "./routes/Index"
import Categories from "./routes/Categories"
import Transaction from "./routes/Transaction"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoriesProvider from "./contexts/Categories"
import ExpensesProvider from "./contexts/Expenses"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import UserProvider from "./contexts/User"
import ModalProvider from "./contexts/Modal"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  // browser router connects our react app to the browser URL
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <ExpensesProvider>
          <ModalProvider>
            <Routes>
                <Route path="/" element={ <IndexPage /> } />
                <Route path="/categories" element={ <Categories /> } />
                <Route path="/transaction" element={ <Transaction /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <Signup /> } />
            </Routes>
          </ModalProvider>
        </ExpensesProvider>
      </CategoriesProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

