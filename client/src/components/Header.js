import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faCircleChevronDown, faTree } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import React from "react"

function Header() {
	 return (
		 <React.Fragment>
				<header className="header grid grid-cols-5 lg:grid-cols-3 justify-items-center pt-4 pb-2 bg-blue-200 ring-1">
					<Link to="/">
						<FontAwesomeIcon className="cursor-pointer pt-1 hover:text-blue-400" icon={faTree} />
					</Link>
					<h1 className="col-span-3 lg:col-span-1 cursor-pointer hover:text-blue-400">
						<span>Feb&nbsp;2022</span>
						<FontAwesomeIcon className="pl-2" icon={faCircleChevronDown} />
					</h1>
					<Link to="/categories">
						<FontAwesomeIcon className="cursor-pointer pt-2 hover:text-blue-400" icon={faPenToSquare} />
					</Link>
				</header>
		 </React.Fragment>
	 )
}

export default Header
