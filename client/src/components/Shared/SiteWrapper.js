import NavigationModal from "../NavigationModal"

export default function SiteWrapper({ children }) {
	return (
		<div className="bg-gray-300">
			<NavigationModal />
			<div className="min-w-content bg-white min-h-screen lg:max-w-[70%] lg:w-full">
					{ children }
			</div>
		</div>
	)
}