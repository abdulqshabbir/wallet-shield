import { FiHome, FiEdit } from "react-icons/fi"
import { Link } from "react-router-dom"
import React from "react"

function Header() {
	 return (
		 <React.Fragment>
				<header className="header grid grid-cols-5 lg:grid-cols-3 justify-items-center pt-4 pb-2 border-b-[1px]">
					<Link to="/">
						<FiHome />
					</Link>
					<h1 className="col-span-3 lg:col-span-1">
						<span className="font-medium">April&nbsp;2022</span>
					</h1>
					<Link to="/categories">
						<FiEdit />
					</Link>
				</header>
		 </React.Fragment>
	 )
}

export default Header
