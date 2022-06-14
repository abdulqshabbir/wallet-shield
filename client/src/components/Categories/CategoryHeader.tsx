import React from "react"
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi"
import deleteCategory from "../../services/deleteCategory"

import getCategories from "../../services/getCategories"
import getExpenses from "../../services/getExpenses"
import { useCategories } from "../../contexts/Categories"
import { useExpenses } from "../../contexts/Expenses"
import { ICategory } from "../../types/cateogry"

interface IProps {
    category: ICategory,
    setRenderAddExpenseField: (render: boolean) => void
}

export default function CategoryHeader({ category, setRenderAddExpenseField }: IProps) {
    let [ , setExpenses ] = useExpenses()
    let [ , setCategories ] = useCategories()

    async function handleCategoryDelete(e: React.MouseEvent) {
        try {
            let isDeleted = await deleteCategory(category.id)
            if (isDeleted) {
                let newCategories = await getCategories()
                let newExpenses = await getExpenses()
                setExpenses(newExpenses)
                setCategories(newCategories)
            }
        } catch(e) {
            console.log(e)
        }
    }

    return(
        <React.Fragment>
            <div className="h-14 px-4 flex justify-between items-center bg-primaryGray-100 border-b-[1px] border-x-[1px]">
                <h2 className="px-4 overflow-ellipsis">
                    {category.name}
                </h2>	
                <div className="flex flex-row">
                    <FiMinusSquare
                        onClick={e => handleCategoryDelete(e)}
                        className="cursor-pointer hover:scale-125" 
                    />
                    <FiPlusSquare
                        onClick={() => setRenderAddExpenseField(true)}
                        className="ml-4 hover:cursor-pointer hover:scale-125"
                    />
                </div>
            </div> 
        </React.Fragment>
    )
}