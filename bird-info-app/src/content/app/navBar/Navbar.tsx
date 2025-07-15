import React from 'react';
import { NavProvider } from '../../../store/nav/NavContext';
import NavList from './NavList';
import Logo from '../../../components/logo/Logo';

const navItems = [
	{ id: '1', label: '白頭翁的特性', href: '#characteristics' },
	{ id: '2', label: '白頭翁的故事', href: '#story' },
	{ id: '3', label: '白頭翁的美照', href: '#photos' },
	{ id: '4', label: '白頭翁的危機', href: '#crisis' }
];

const Navbar: React.FC = () => {
	return (
		<NavProvider>
			<div className="bg-white flex flex-col items-center pt-[70px] mb:pt-[0] mb:h-fit">
				<div className='relative flex justify-center w-full px-[24px] py-[16px] mb-[78px] mb:justify-between mb:items-center mb:mb-0'>
					<div className="hidden mb:block">=</div>
					<h1 className="font-[700] text-[30px] mb:mb-[0] mb:text-[18px]">白頭翁不吃小米</h1>
					<Logo className="
						absolute right-0 top-[50%] translate-x-1/2 -translate-y-1/2
						mb:static mb:translate-x-0 mb:translate-y-0 mb:h-[40px] mb:w-[40px]
					"/>
				</div>
				<NavList navItems={navItems} />
			</div>
		</NavProvider>
	);
};

export default Navbar;
