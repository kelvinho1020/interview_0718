import React from 'react'

interface NavItemProps {
	id: string;
	label: string;
	href: string;
	isActive: boolean;
	onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, href, isActive, onClick }) => {
	return (
		<li>
			<a 
				href={href}
				onClick={(e) => {
					e.preventDefault();
					onClick();
				}}
				className={`
					block px-6 py-3 rounded-lg text-center font-medium text-[16px] transition-all duration-300 cursor-pointer
					${isActive 
						? 'bg-nav-active text-white border-2 border-nav-active' 
						: 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
					}
				`}
			>
				{label}
			</a>
		</li>
	);
}

export default NavItem;