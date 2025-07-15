import React from 'react';
import { useNav } from '../../../store/nav';

interface NavItemProps {
	id: string;
	label: string;
	href: string;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, href }) => {
	const { activeId, setActiveId } = useNav();

	const isActive = activeId === id;

	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		window.location.hash = href;
		setActiveId(id);
	}

	return (
		<li>
			<a
				href={href}
				onClick={handleClick}
				className={`
					text-[16px] transition-all duration-100 cursor-pointer
					${isActive
						? "text-deepRed border-b-2 border-deepRed font-[700]"
						: "hover:text-deepRed hover:border-b-2 hover:border-deepRed hover:font-[700]"
					}
				`}
			>
				{label}
			</a>
		</li>
	);
};

export default NavItem;
