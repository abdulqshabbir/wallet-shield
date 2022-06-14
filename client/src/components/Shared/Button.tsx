import React from "react"

interface IProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    width?: string,
    children: React.ReactNode
}

export default function Button({ onClick, width, children }: IProps) {
    return (
        <button
            onClick={onClick}
            className={`${getButtonWidth(width ? width : "")} h-14 flex justify-center items-center font-normal text-[22px] rounded-lg text-white bg-primaryBlue`}
        >
                {children}
        </button>
    )
}

function getButtonWidth(width: string) {
    if (!width) {
        return "w-[95%]"
    } else {
        return `w-[${width}]`
    }

}