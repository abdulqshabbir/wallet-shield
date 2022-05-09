export default function Button({ onClick, width, children }) {
    return (
        <button
            onClick={onClick}
            className={`${getButtonWidth(width)} h-14 flex justify-center items-center font-normal text-[22px] rounded-lg text-white bg-primaryBlue`}
        >
                {children}
        </button>
    )
}

function getButtonWidth(width) {
    if (!width) {
        return "w-[95%]"
    } else {
        console.log(`w-[${width}]`)
        return `w-[${width}]`
    }

}