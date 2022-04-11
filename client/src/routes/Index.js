/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Header"
import Footer from "../components/Footer"
import React, { useState } from "react"
import AssignMoney from "../components/Index/AssignMoney"
import TableHeader from "../components/Index/TableHeader"
import CategoriesAndExpensesList from "../components/Index/CategoriesAndExpensesList"

function App(props) {
	return (
		<div className="min-w-content max-w-5xl mx-auto">
			{/* <Sidebar/> */}
			<div className="h-screen">
				<Header/>
				<AssignMoney />
				<TableHeader />
				<CategoriesAndExpensesList />
				<Footer/>
			</div>
		</div>
	)
}



  
export default App
