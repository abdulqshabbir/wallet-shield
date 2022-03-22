import React from "react"
import Sidebar from "../components/Sidebar"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Categories({  }) {
	return (
		<React.Fragment>
			<Sidebar/>
			<div className="h-screen">
				<Header/>
				<main>

				</main>
				<Footer/>
			</div>
		</React.Fragment>
	)
}
