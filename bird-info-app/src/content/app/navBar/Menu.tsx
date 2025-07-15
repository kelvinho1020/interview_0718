import React from 'react';
import { cn } from '../../../utils/cn';

interface MenuProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ className = "", isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col justify-center items-start gap-[5px] w-[24px] h-[24px] cursor-pointer',
        className
      )}
    >
      <span
        className={cn(
          "block w-full border-b-4 border-black transition-transform duration-300 [transform-origin:1px_center]",
          isOpen ? "rotate-45 w-[28px]" : ""
        )}
      />
      <span
        className={cn(
          "block w-[62.5%] border-b-4 border-black transition-opacity duration-300",
          isOpen ? "opacity-0" : ""
        )}
      />
      <span
        className={cn(
          "block w-full border-b-4 border-black transition-transform duration-300 [transform-origin:1px_center]",
          isOpen ? "-rotate-45 w-[28px]" : ""
        )}
      />
    </div>
  );
};

export default Menu;
