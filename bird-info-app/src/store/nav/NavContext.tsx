import React, { createContext, useState } from 'react';

export interface NavContextType {
	activeId: string;
	setActiveId: (id: string) => void;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [activeId, setActiveId] = useState('1');

	return (
		<NavContext.Provider value={{ activeId, setActiveId }}>
			{children}
		</NavContext.Provider>
	);
};
