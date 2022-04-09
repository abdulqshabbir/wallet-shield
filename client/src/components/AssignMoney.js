import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function AssignMoney () {
    return (
        <section className="pt-4 flex justify-center items-center hover:text-blue-400">
            <h2 className="mr-4">Assign your money</h2>
            <FontAwesomeIcon className="" icon={faArrowRight} />
        </section>
    )
}

