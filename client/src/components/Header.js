import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPenToSquare, faCircleChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Header() {
    // return(
    //     <React.Fragment>
    //         <header className='h-16 mx-12 flex flex-row justify-between items-center'>
    //             <div>
    //                 <span>March 2022</span>
    //             </div>
    //             <div>
    //                 <span>My Budget</span>
    //             </div>
    //             <div>
    //                 <FontAwesomeIcon icon={faPenToSquare}/> 
    //             </div>
    //         </header>
    //         <section className='flex flex-row justify-between px-8 items-center h-16 bg-gray-100 mx-auto'>
    //             <span>Assign Your Money</span>
    //             <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded'>
    //                 <FontAwesomeIcon icon={faArrowRight} />
    //             </div>
    //         </section>
    //     </React.Fragment>
    // )
	 return (
		 <React.Fragment>
				<header className="grid grid-cols-3 justify-items-center py-6">
					<FontAwesomeIcon className="hover:text-blue-300 text-xl sm:text-2xl md:text-3xl pt-2" icon={faEllipsis} />
					<h1 className="hover:text-blue-300">
						<span className="text-3xl sm:text-4xl md:text-5xl">Feb&nbsp;2022</span>
						<FontAwesomeIcon className="text-xl sm:text-2xl md:text-3xl pb-1 md:pb-2 pl-2 sm:pl-3 md:pl-4 lg:pl-6" icon={faCircleChevronDown} />
					</h1>
					<FontAwesomeIcon className="hover:text-blue-300 text-xl sm:text-2xl md:text-3xl pt-2" icon={faPenToSquare} />
				</header>
		
				<section className="grid grid-cols-2 justify-items-center text-blue-900 hover:text-blue-300">
					<h2 className="text-lg sm:text-xl md:text-2xl">Assign your money</h2>
					<FontAwesomeIcon className="text-lg sm:text-xl md:text-2xl" icon={faArrowRight} />
				</section>
		 </React.Fragment>
	 )
}

export default Header
