import useWindowDimensions from "./useWindowDimensions"
import React, { useEffect, useState } from "react"

const Modal = React.createContext()

export function useModal() {
    return React.useContext(Modal)
}

export default function ModalProvider({ children }) {
    const [ modal, setModal ] = useState(false)
    const { height, width } = useWindowDimensions();    

    useEffect(() => {
        if (width >= 1024) {
            setModal(true)
        }
    }, [width])

    return(
        <Modal.Provider value={[modal, setModal]}>
            {children}
        </Modal.Provider>
    )
}
