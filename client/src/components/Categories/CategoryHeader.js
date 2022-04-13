import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faCircleMinus, faGripHorizontal } from "@fortawesome/free-solid-svg-icons"

export default function CategoryHeader({ category, setRenderAddExpenseField }) {
    return(
        <React.Fragment>
            <div className="h-14 px-4 flex flex-wrap justify-between items-center bg-primaryGray-100 border-b-[1px] border-x-[1px]">
                <div className="mx-8 flex justify-center items-center">
                    <h2 className="overflow-ellipsis">{category.name}</h2>	
                    <FontAwesomeIcon className="ml-4 cursor-pointer hover:scale-125" icon={faCircleMinus} />
                </div>
                <div className="mx-8 flex justify-center items-center">
                    <FontAwesomeIcon onClick={() => setRenderAddExpenseField(true)} className="hover:cursor-pointer hover:scale-125" icon={faCirclePlus} />
                    <FontAwesomeIcon className="ml-4" icon={faGripHorizontal} />
                </div>
            </div> 
        </React.Fragment>
    )
}