import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function () {
    return(
        <React.Fragment>
            <header className='h-16 mx-12 flex flex-row justify-between items-center'>
                <div>
                    <span>March 2022</span>
                </div>
                <div>
                    <span>My Budget</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare}/> 
                </div>
            </header>
            <section className='flex flex-row justify-between px-8 items-center h-16 bg-gray-100 mx-auto'>
                <span>Assign Your Money</span>
                <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </section>
        </React.Fragment>
    )
}