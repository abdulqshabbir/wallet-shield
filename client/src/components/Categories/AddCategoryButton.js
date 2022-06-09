
export default function AddCategoryButton({ setRenderAddCategory }) {
    return(
        <div onClick={() => setRenderAddCategory(true)} className="h-20 flex flex-wrap justify-center items-center cursor-pointer">
            <button className="h-14 px-8 py-2 text-xl bg-primaryGray-200 hover:bg-gray-200 rounded-lg">
                <span className="mr-4">Add New Category</span>
                <button className="hover:scale-125" size="lg"/>
            </button>
        </div>
    )
}