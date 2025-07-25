import React from 'react'

interface DescriptionItemProps {
  title: string,
  description: string
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  description
}) => {
  return (
    <div className="flex gap-[40px]">
        <h3 className="
          relative text-[34px] font-[700] leading-[120%] h-fit w-min
          after:absolute after:content-[''] after:block after:w-[25px] after:h-[25px] after:border-[8px] after:border-[#AA666699] after:rounded-full after:bg-transparent after:bottom-[-15px] after:right-[-15px]
        ">
        {title}
      </h3>
      <p className="leading-[120%]">{description}</p>
    </div>
  );
}

export default DescriptionItem; 