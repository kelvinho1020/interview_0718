import React from 'react'
import NavItem from "./NavItem";

interface NavItemData {
	id: string;
	label: string;
	href: string;
}

interface NavListProps {
	navItems: NavItemData[];
	activeId: string;
}

const NavList: React.FC<NavListProps> = ({ navItems, activeId }) => {
	return (
		<ul className="flex flex-col gap-3">
			{navItems.map((item) => (
				<NavItem
					key={item.id}
					{...item}
					isActive={activeId === item.id}
				/>
			))}
		</ul>
	);
}

export default NavList;