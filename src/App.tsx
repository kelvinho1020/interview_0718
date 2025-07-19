import React from "react";
import { Navbar, HeroBanner, Description } from "./content/app";
import { LAYOUT } from "./constants/layout";
import { useIsMobile } from "./hooks/useIsMobile";

const heroBannerItem = {
  title: "白頭翁 (Chinese bulbul)",
  description:
    "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。",
  image: "/images/heroBanner.webp",
};

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className=" bg-[#dcccbc] mb:h-auto min-h-screen mb:flex mb:flex-col">
      <Navbar />
      <main
        className="ml-[365px] mb:ml-0"
        style={{ marginLeft: isMobile ? "0px" : `${LAYOUT.SIDEBAR_WIDTH}px` }}
      >
        <HeroBanner {...heroBannerItem} />
        <Description />
      </main>
    </div>
  );
};

export default App;
