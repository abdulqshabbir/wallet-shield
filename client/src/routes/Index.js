/* Tailwind only works properly for .js files not .jsx */
import Header from "../components/Shared/Header"
import React, { useEffect } from "react"
import AssignMoney from "../components/Index/AssignMoney"
import TableHeader from "../components/Index/TableHeader"
import CategoriesAndExpensesList from "../components/Index/CategoriesAndExpensesList"
import SiteWrapper from "../components/Shared/SiteWrapper"
import Protected from "../components/Shared/Protected"
import { useModal } from "../contexts/Modal"
import useWindowDimensions from "../contexts/useWindowDimensions"

function App() {
	const { width, } = useWindowDimensions()
	const [ , setModal] = useModal()
	useEffect(() => {
		if (width >= 1024) {
			setModal(true)
		}
	}, [])
	return (
		<Protected>
			<SiteWrapper>
				<Header/>
				<AssignMoney />
				<TableHeader />
				<CategoriesAndExpensesList />
			</SiteWrapper>
		</Protected>
	)
}

export default App
