import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faCircleChevronDown, faMoneyBill1Wave, faChartLine, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {Link} from "react-router-dom"

function Footer() {
	 return (
		 <React.Fragment>
			 <div className="footer grid grid-cols-5 justify-content-center content-center justify-around px-12 fixed bottom-0 w-full max-w-5xl mx-auto h-14 z-10 bg-blue-200 ring-1">
					<a className="hover:text-blue-400 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCircleChevronDown} />
					</a>
					<a className="hover:text-blue-400 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faMoneyBill1Wave} />
					</a>
					<Link to="/add-transaction" className='hover:text-blue-400 text-center'>
						<FontAwesomeIcon className="" icon={faCirclePlus} />
					</Link>
					<a className="hover:text-blue-400 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faChartLine} />
					</a>
					<a className="hover:text-blue-400 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faBuildingColumns} color="green"/>
					</a>
				</div>
		 </React.Fragment>
	 )
}

export default Footer
