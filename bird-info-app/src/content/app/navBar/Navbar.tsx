import React, { useState } from 'react'
import NavList from "./NavList";

interface NavbarProps {

}

interface NavItemData {
	id: string;
	label: string;
	href: string;
}

const navItems: NavItemData[] = [
	{ id: 'characteristics', label: '白頭翁的特性', href: '#characteristics' },
	{ id: 'story', label: '白頭翁的故事', href: '#story' },
	{ id: 'photos', label: '白頭翁的美照', href: '#photos' },
	{ id: 'crisis', label: '白頭翁的危機', href: '#crisis' }
];

const Navbar: React.FC<NavbarProps> = ({}) => {

	return (
		<div className="bg-white flex flex-col items-center pt-[70px]">
			<h1 className="font-[700] text-[30px] mb-[78px]">
				白頭翁不吃小米
			</h1>
			<NavList 
				navItems={navItems}
			/>
		</div>
	);
}

export default Navbar;