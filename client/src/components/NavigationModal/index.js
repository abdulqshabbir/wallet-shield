import { FaHome } from "react-icons/fa"
import { FiEdit, FiPlus, FiLogOut } from "react-icons/fi"
import { Link } from "react-router-dom"

import { clearTokensFromLocalStorage } from "../../services/auth"
import { useUser } from "../../contexts/User"
import logoutUser from "../../services/logoutUser"
import { useModal } from "../../contexts/Modal"

export default function NavigationModal() {
    const [ user, setUser ] = useUser()
    const [ modal, setModal ] = useModal()
    const LINK_STYLES = "flex w-5/6 mx-auto justify-center items-center h-14 cursor-pointer rounded-md hover:bg-lightBlue"

	async function handleLogout() {
		const res = await logoutUser()
		if (res.status === 204) {
			clearTokensFromLocalStorage()
			setUser(null)
		}
	}

    if (!modal) {
        return null
    } else {
        return(
            <div className="fixed h-[100vh] w-[100vw] py-32 mx-auto max-w-5xl flex flex-col justify-evenly items-start z-20 bg-darkBlue text-white">
                <div className="flex flex-col w-5/6 mx-auto justify-center items-center h-12 rounded-md">
                    <p className="text-bg-lightBlue">Your Budget</p>
                    <span>{user.email}</span>
                </div>
                <Link onClick={() => setModal(false)} to="/" className={LINK_STYLES}>
                    <FaHome className="mr-4" size="27px" />
                    <p>Home</p>
                </Link>
                <Link onClick={() => setModal(false)} to="/transaction" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FiPlus className="mr-4" size="30px" />
                        <p>Add Transaction</p>
                    </div>
                </Link>
                <Link onClick={() => setModal(false)} to="/categories" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FiEdit className="mr-4" size="25px" />
                        <p>Edit Categories</p>
                    </div>
                </Link>
                <Link onClick={
                    () => {
                        setModal(false)
                        handleLogout()
                    }}
                    to="/login"
                    className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FiLogOut className="mr-4" size="30px"/> 
                        <p>Logout</p>
                    </div>
                </Link>
            </div>
        )
    }
}