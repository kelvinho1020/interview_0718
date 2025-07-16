import React from "react";
import { Navbar, HeroBanner } from "./content/app";
import { Description } from "./content/app/description";

const heroBannerItem = {
	title: "白頭翁 (Chinese bulbul)",
	description: "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。",
	image: "/images/heroBanner.webp",
}

const SIDEBAR_WIDTH = "365px";

const App: React.FC = () => {

	return (
		<div className=" bg-[#dcccbc] mb:h-auto min-h-screen mb:flex mb:flex-col">
		{/* <div className="grid grid-cols-[365px_1fr] bg-[#dcccbc] mb:grid-cols-1 mb:h-auto min-h-screen mb:flex mb:flex-col"> */}
			<Navbar />
			<main className="ml-[365px] mb:ml-0">
				<HeroBanner {...heroBannerItem}/>
				<Description />
			</main>
		</div>
	);
};

export default App; 