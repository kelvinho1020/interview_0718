import React from 'react'

interface HeroBannerProps {
	title: string,
	description: string,
	image: string,
}

const HeroBanner: React.FC<HeroBannerProps> = ({title, description, image}) => {
  return (
    <div className="relative">
      <div className="w-full max-h-[600px] overflow-hidden aspect-[1075/600] mb:aspect-[375/312] mb:max-h-[312px]">
        <img src={image} alt="Hero Banner" className="w-full h-full object-cover scale-[1.5]" />
      </div>
      <div className="
        absolute flex flex-col items-end gap-[16px] right-[48px] bottom-[48px] text-[#fff] text-right
        mb:right-[24px] mb:bottom-[24px];  
      ">
        <h1 className="text-[48px] font-[700] mb:w-[50%] leading-[100%]">{title}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default HeroBanner;