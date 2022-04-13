import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"

export default function AddCategoryButton({ setRenderAddCategory }) {
    return(
        <div onClick={() => setRenderAddCategory(true)} className="h-20 flex flex-wrap justify-center items-center cursor-pointer">
            <button className="h-14 px-8 py-2 text-xl bg-primaryGray-200 hover:bg-gray-200 rounded-lg">
                <span className="mr-4">Add New Category</span>
                <FontAwesomeIcon className="hover:scale-125" icon={faFolderPlus} size="lg"/>
            </button>
        </div>
    )
}