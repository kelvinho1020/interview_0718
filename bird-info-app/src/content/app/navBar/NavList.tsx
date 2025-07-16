import React from 'react';
import NavItem from './NavItem';

interface NavItemData {
	id: string;
	label: string;
	href: string;
}

interface NavListProps {
	navItems: NavItemData[];
}

const NavList: React.FC<NavListProps> = ({ navItems }) => {
	return (
		<ul className="flex flex-col gap-[20px] mb:w-full mb:py-[30px] bg-white mb:items-center">
		{/* <ul className="flex flex-col gap-[20px] mb:w-full mb:py-[30px] bg-white mb:items-center mb:absolute top-[73px] left-0 z-[1]"> */}
			{navItems.map((item) => (
				<NavItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default NavList;
