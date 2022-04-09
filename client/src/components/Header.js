import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faCircleChevronDown, faTree } from "@fortawesome/free-solid-svg-icons"
import colors from '../constants/colors'
import { Link } from "react-router-dom"
import React from "react"

function Header() {
	 return (
		 <React.Fragment>
				<header className="header grid grid-cols-5 lg:grid-cols-3 justify-items-center pt-4 pb-2 border-b-[1px] border-b-primaryGray-200">
					<Link to="/">
						<FontAwesomeIcon
							className="cursor-pointer pt-1 hover:text-blue-400"
							icon={faTree}
							color={colors.primaryBlue}
							size="sm"
						/>
					</Link>
					<h1 className="col-span-3 lg:col-span-1 cursor-pointer">
						<span className="font-medium">April&nbsp;2022</span>
						<FontAwesomeIcon
							className="pl-2"
							icon={faCircleChevronDown}
							color={colors.primaryBlue}
							size="sm"
						/>
					</h1>
					<Link to="/categories">
						<FontAwesomeIcon
							className="cursor-pointer pt-2 hover:text-blue-400"
							icon={faPenToSquare}
							color={colors.primaryBlue}
							size="sm"
						/>
					</Link>
				</header>
		 </React.Fragment>
	 )
}

export default Header
