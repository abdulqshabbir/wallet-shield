/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import AssignMoney from "../components/Index/AssignMoney"
import TableHeader from "../components/Index/TableHeader"
import CategoriesAndExpensesList from "../components/Index/CategoriesAndExpensesList"
import SiteWrapper from "../components/SiteWrapper"

function App() {
	return (
		<SiteWrapper>
			<Header/>
			<AssignMoney />
			<TableHeader />
			<CategoriesAndExpensesList />
			<Footer/>
		</SiteWrapper>
	)
}
  
export default App
