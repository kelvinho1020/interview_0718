import React, { createContext, useState, useEffect } from 'react';
import { hashToIdMap } from '../../content/app/navBar/data';

export interface NavContextType {
  activeId: string;
  setActiveId: (id: string) => void;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeId, setActiveId] = useState('1');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const mappedId = hashToIdMap[hash];
      if (mappedId) {
        setActiveId(mappedId);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <NavContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </NavContext.Provider>
  );
};