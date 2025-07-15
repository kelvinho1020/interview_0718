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
		<ul className="flex flex-col gap-[20px] mb:hidden">
			{navItems.map((item) => (
				<NavItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default NavList;
