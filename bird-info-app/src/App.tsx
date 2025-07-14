import React from "react";
import { Navbar, HeroBanner } from "./content/app";

const App: React.FC = () => {

	return (
		<div className="grid grid-cols-[365px_1fr] mb:grid-cols-1 h-screen">
			<Navbar />
			<main>
				<HeroBanner />
			</main>
		</div>
	);
};

export default App; 