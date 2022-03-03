import React from "react";

export default function ({ expenseName }) {
    return(
        <React.Fragment>
            <li className='flex justify-between items-center pl-8 h-12 border-b border-gray-100'>
                <div> {expenseName} </div>
                <div className='h-6 w-1/3 bg-gray-100 rounded-'>
                    <div className='w-1/3 h-full bg-green-500'>
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}