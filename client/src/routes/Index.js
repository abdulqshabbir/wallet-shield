/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/Footer"
import React from "react"
import AssignMoney from "../components/Index/AssignMoney"
import TableHeader from "../components/Index/TableHeader"
import CategoriesAndExpensesList from "../components/Index/CategoriesAndExpensesList"
import SiteWrapper from "../components/Shared/SiteWrapper"
import Protected from "../components/Shared/Protected"

function App() {
	return (
		<Protected>
			<SiteWrapper>
				<Header/>
				<AssignMoney />
				<TableHeader />
				<CategoriesAndExpensesList />
				<Footer/>
			</SiteWrapper>
		</Protected>
	)
}

export default App
