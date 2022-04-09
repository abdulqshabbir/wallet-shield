import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faCircleChevronDown, faMoneyBill1Wave, faChartLine, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {Link} from "react-router-dom"
import colors from '../constants/colors'

function Footer() {
	 return (
		 <React.Fragment>
			 <div className="grid grid-cols-5 justify-content-center content-center justify-around px-12 fixed bottom-0 w-full max-w-5xl mx-auto h-14 z-10 border-t-[1px] border-x-[1px]">
					<a className="hover:scale-125 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faCircleChevronDown} color={colors.primaryBlue} />
					</a>
					<a className="hover:scale-125 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faMoneyBill1Wave} color={colors.primaryBlue} />
					</a>
					<Link to="/add-transaction" className='hover:scale-125 text-center'>
						<FontAwesomeIcon className="" icon={faCirclePlus} color={colors.primaryBlue} />
					</Link>
					<a className="hover:scale-125 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faChartLine} color={colors.primaryBlue} />
					</a>
					<a className="hover:scale-125 text-center" href="#a">
						<FontAwesomeIcon className="" icon={faBuildingColumns} color={colors.primaryBlue} />
					</a>
				</div>
		 </React.Fragment>
	 )
}

export default Footer
