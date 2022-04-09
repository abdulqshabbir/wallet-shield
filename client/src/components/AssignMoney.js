import React from 'react'

export default function AssignMoney () {
    return (
        <section className="h-16 flex justify-center items-center bg-primaryGray-100 border-x-[1px]">
            <div className="h-12 w-full mx-4 flex flex-wrap justify-center items-center bg-primaryGray-200 rounded-md md:w-80">
                <span>Assign Money</span>
                <span className="text-primaryGray-300"> {`>`} </span>
            </div>
        </section>
    )
}

