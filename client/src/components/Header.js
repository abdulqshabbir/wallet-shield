import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenToSquare, faCircleChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Header() {
	 return (
		 <React.Fragment>
				<header className="shrink-on-xl shrink-around header grid grid-cols-5 lg:grid-cols-3 justify-items-center py-4">
					<FontAwesomeIcon className="cursor-pointer pt-1 hover:text-blue-500" icon={faEllipsis} />
					<h1 className="col-span-3 lg:col-span-1 cursor-pointer hover:text-blue-500">
						<span className="">Feb&nbsp;2022</span>
						<FontAwesomeIcon className="pl-2" icon={faCircleChevronDown} />
					</h1>
					<FontAwesomeIcon className="cursor-pointer pt-2 hover:text-blue-500" icon={faPenToSquare} />
				</header>
		
				<section className="xl:pl-56 xl:pr-10 flex justify-center items-center">
					<h2 className="mr-4">Assign your money</h2>
					<FontAwesomeIcon className="" icon={faArrowRight} />
				</section>
		 </React.Fragment>
	 )
}

export default Header
