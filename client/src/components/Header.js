import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenToSquare, faCircleChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Header() {
	 return (
		 <React.Fragment>
				<header className="grid grid-cols-3 justify-items-center py-4">
					<FontAwesomeIcon className="cursor-pointer text-xl sm:text-2xl md:text-3xl pt-1 lg:ml-12 xl:ml-32 hover:hover:text-blue-500" icon={faEllipsis} />
					<h1 className="cursor-pointer hover:hover:text-blue-500">
						<span className="text-xl sm:text-4xl md:text-5xl">Feb&nbsp;2022</span>
						<FontAwesomeIcon className="text-xl sm:text-2xl md:text-3xl md:pb-2 pl-2 sm:pl-3 md:pl-4 lg:pl-6" icon={faCircleChevronDown} />
					</h1>
					<FontAwesomeIcon className="cursor-pointer text-md sm:text-2xl md:text-3xl pt-2 hover:hover:text-blue-500" icon={faPenToSquare} />
				</header>
		
				<section className="flex justify-center items-center">
					<h2 className="mr-4 text-lg sm:text-xl md:text-2xl">Assign your money</h2>
					<FontAwesomeIcon className="ml-4 text-lg sm:text-xl md:text-2xl" icon={faArrowRight} />
				</section>
		 </React.Fragment>
	 )
}

export default Header
