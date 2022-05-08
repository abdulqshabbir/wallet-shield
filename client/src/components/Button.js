export default function Button({ onClick, width, children }) {
    return (
        <button onClick={onClick} className={`w-[${width? width:'100%'}] h-14 flex justify-center items-center font-normal text-[22px] rounded-lg text-white bg-primaryBlue`}>
            {children}
        </button>
    )
}