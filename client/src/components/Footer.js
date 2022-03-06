import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleChevronDown, faMoneyBill1Wave, faChartLine, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Footer() {
	 return (
		 <React.Fragment>
			 <div className="footer xl:invisible grid grid-cols-5 justify-content-center content-center justify-around px-12 fixed bottom-0 w-full h-14 sm:h-16 z-10 bg-gray-400">
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCircleChevronDown} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faMoneyBill1Wave} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faChartLine} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faBuildingColumns} />
					</a>
					<a className="hover:text-blue-500 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCirclePlus} />
					</a>
				</div>
		 </React.Fragment>
	 )
}

export default Footer
