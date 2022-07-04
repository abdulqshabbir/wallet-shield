import { FaHome } from "react-icons/fa"
import { FiEdit, FiPlus, FiLogOut } from "react-icons/fi"
import { BiPieChart } from "react-icons/bi"
import { Link } from "react-router-dom"

import { clearTokensFromLocalStorage } from "../../services/auth"
import { useUser } from "../../contexts/User"
import logoutUser from "../../services/logoutUser"
import { useModal } from "../../contexts/Modal"
import { VscChromeClose } from "react-icons/vsc"
import useWindowDimensions from "../../contexts/useWindowDimensions"

export default function NavigationModal() {
    const [ user, setUser ] = useUser()
    const [ modal, setModal ] = useModal()
    const { width, height } = useWindowDimensions() 
    const LINK_STYLES = "flex w-5/6 mx-auto justify-center items-center h-14 cursor-pointer rounded-md hover:bg-lightBlue lg:justify-start"

	async function handleLogout() {
		const res = await logoutUser()
		if (res.status === 204) {
			clearTokensFromLocalStorage()
			setUser(null)
		}
	}

    function handleModalClose() {
        if (width < 1024) {
            setModal(false)
        } 
    }

    if (!modal) {
        return null
    } else {
        return(
            <div className="fixed h-[100vh] w-[100vw] py-32 flex flex-col justify-evenly items-start z-20 bg-darkBlue text-white lg:max-w-[30%] lg:right-0 lg:pt-0 lg:pb-80">
                { 
                    width < 1024 &&
                    <VscChromeClose
                        size="30px"
                        className="absolute top-8 right-8 cursor-pointer"
                        onClick={handleModalClose}
                    />
                }
                <Link onClick={handleModalClose} to="/" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FaHome className="mr-4" size="30px" />
                        <p>Home</p>
                    </div>
                </Link>
                <Link onClick={handleModalClose} to="/transaction" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FiPlus className="mr-4" size="30px" />
                        <p>Add Transaction</p>
                    </div>
                </Link>
                <Link onClick={handleModalClose} to="/categories" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <FiEdit className="mr-4" size="25px" />
                        <p>Edit Categories</p>
                    </div>
                </Link>
                <Link onClick={handleModalClose} to="/chart" className={LINK_STYLES}>
                    <div className={LINK_STYLES}>
                        <BiPieChart className="mr-4" size="25px" />
                        <p>See Spending Chart</p>
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