import React, { useEffect, useState } from 'react';
import { NavProvider } from '../../../store/nav/NavContext';
import NavList from './NavList';
import Logo from '../../../components/logo/Logo';
import Menu from './Menu';
import { cn } from '../../../utils/cn';
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useClickOutside } from '../../../hooks/useClickOutside';
import { navItems } from './data';
import { LAYOUT } from "../../../constants/layout";

const Navbar: React.FC = () => {
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(!isMobile);
	const ref = useClickOutside<HTMLDivElement>(() => isMobile && setIsOpen(false));
	
	useEffect(() => {
		setIsOpen(!isMobile);
	}, [isMobile])
	
	return (
		<NavProvider>
			<nav 
				ref={ref} 
				className="fixed z-[1] h-screen left-0 top-0 bg-white flex flex-col items-center pt-[70px] mb:static mb:pt-[0] mb:h-fit mb:shadow-[0px_4px_20px_0px_#00000014]"
				style={{ width: isMobile ? "100%" : `${LAYOUT.SIDEBAR_WIDTH}px`}}
			>
				<div className={cn('relative flex justify-center w-full px-[24px] py-[16px] mb-[78px] mb:justify-between mb:items-center mb:mb-0', isOpen && 'mb:border-b mb:border-[#E6E7E8]')}>
					<Menu
						className="hidden mb:flex"
						isOpen={isOpen}
						onClick={() => setIsOpen(prev => !prev)}
					/>
					<h1 className="font-[700] text-[30px] mb:mb-[0] mb:text-[18px]">白頭翁不吃小米</h1>
					<Logo className="
						absolute right-0 top-[50%] translate-x-1/2 -translate-y-1/2
						mb:static mb:translate-x-0 mb:translate-y-0 mb:h-[40px] mb:w-[40px] z-[1]
					"/>
				</div>
				{isOpen && <NavList navItems={navItems} />}
			</nav>
		</NavProvider>
	);
};

export default Navbar;
