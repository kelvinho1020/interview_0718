import React from 'react'

interface HeroBannerProps {
	title: string,
	description: string,
	image: string,
}

const HeroBanner: React.FC<HeroBannerProps> = ({title, description, image}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="w-full h-[600px] overflow-hidden scale-[1.5] bg-cover bg-center mb:aspect-[375/312] mb:max-h-[312px]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className="
          absolute flex flex-col items-end gap-[16px] right-[48px] bottom-[48px] text-[#fff] text-right
          mb:right-[24px] mb:bottom-[24px] mb:ml-[26px]
        "
      >
        <h1 className="text-[48px] font-[700] mb:w-[70%] leading-[100%] mb:leading-[120%]">{title}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default HeroBanner;