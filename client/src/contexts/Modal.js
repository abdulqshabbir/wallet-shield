import React, { useState } from "react"

const Modal = React.createContext()

export function useModal() {
    return React.useContext(Modal)
}

export default function ModalProvider({ children }) {
    const [ modal, setModal ] = useState(false)
    return(
        <Modal.Provider value={[modal, setModal]}>
            {children}
        </Modal.Provider>
    )
}
