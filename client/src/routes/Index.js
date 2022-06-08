/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Shared/Header"
import React from "react"
import AssignMoney from "../components/Index/AssignMoney"
import TableHeader from "../components/Index/TableHeader"
import CategoriesAndExpensesList from "../components/Index/CategoriesAndExpensesList"
import SiteWrapper from "../components/Shared/SiteWrapper"
import Protected from "../components/Shared/Protected"
import NavigationModal from "../components/NavigationModal"

function App() {
	return (
		<Protected>
			<SiteWrapper>
				<NavigationModal />
				<Header/>
				<AssignMoney />
				<TableHeader />
				<CategoriesAndExpensesList />
			</SiteWrapper>
		</Protected>
	)
}

export default App
