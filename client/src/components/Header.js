import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenToSquare, faCircleChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Header() {
	 return (
		 <React.Fragment>
				<header className="header xl:pl-56 xl:pr-10 grid grid-cols-5 lg:grid-cols-3 justify-items-center pt-4 pb-2 bg-blue-200 ring-1">
					<FontAwesomeIcon className="cursor-pointer pt-1 hover:text-blue-400" icon={faEllipsis} />
					<h1 className="col-span-3 lg:col-span-1 cursor-pointer hover:text-blue-400">
						<span className="">Feb&nbsp;2022</span>
						<FontAwesomeIcon className="pl-2" icon={faCircleChevronDown} />
					</h1>
					<FontAwesomeIcon className="cursor-pointer pt-2 hover:text-blue-400" icon={faPenToSquare} />
				</header>
		
				<section className="xl:pl-56 xl:pr-10 pt-4 flex justify-center items-center hover:text-blue-400">
					<h2 className="mr-4">Assign your money</h2>
					<FontAwesomeIcon className="" icon={faArrowRight} />
				</section>
		 </React.Fragment>
	 )
}

export default Header
