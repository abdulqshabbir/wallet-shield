import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {Link} from "react-router-dom"
import colors from "../constants/colors"
import { clearTokensFromLocalStorage } from "../services/auth"
import { useUser } from "../contexts/User"
import logoutUser from "../services/logoutUser"

function Footer() {
	const [ use, setUser ] = useUser()
	async function handleLogout() {
		const res = await logoutUser()
		if (res.status === 204) {
			clearTokensFromLocalStorage()
			setUser(null)
		}
	}
	return (
		<React.Fragment>
			<div className="w-full max-w-5xl mx-auto h-14 grid grid-cols-2 items-center px-12 fixed bottom-0 z-10 bg-white border-t-[1px]">
				<Link to="/transaction" className='hover:scale-125 text-center'>
					<FontAwesomeIcon icon={faCirclePlus} color={colors.primaryBlue} />
				</Link>
				<Link onClick={handleLogout} to="/login" className='hover:scale-125 text-center'>
					<FontAwesomeIcon icon={faDoorOpen} color={colors.primaryBlue} />
				</Link>
			</div>
		</React.Fragment>
	)
}

export default Footer
