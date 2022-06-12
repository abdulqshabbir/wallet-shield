interface IProps {
    message: string
}

export default function ErrorCard({ message }: IProps) {
    if (message === "") return null

    return (
        <div className="h-12 mt-4 rounded-md text-[1rem] flex justify-center items-center font-light bg-red-200">
            <p>{ message }</p>
        </div>
    )
}
