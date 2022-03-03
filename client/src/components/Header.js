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
					<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faEllipsis} />
					<h1>
						<span className="text-4xl lg:text-5xl">Feb 2022</span>&nbsp;
						<FontAwesomeIcon className="text-2xl lg:text-3xl pb-1 lg:pb-2" icon={faCircleChevronDown} />
					</h1>
					<FontAwesomeIcon className="text-2xl lg:text-3xl pt-2" icon={faPenToSquare} />
				</header>
		
				<section className="grid grid-cols-2 justify-items-center py-3 text-gray-700">
					<h2 className="text-xl lg:text-2xl">Assign your money</h2>
					<FontAwesomeIcon className="text-xl lg:text-2xl" icon={faArrowRight} />
				</section>
		 </React.Fragment>
	 )
}

export default Header
