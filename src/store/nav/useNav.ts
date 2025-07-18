import { useContext } from "react";
import { NavContext, NavContextType } from "./NavContext";

export const useNav = (): NavContextType => {
	const ctx = useContext(NavContext);
	if (!ctx) throw new Error('useNav 必須在 NavProvider 中使用');
    
	return ctx;
};
