"use client"
import { createContext, ReactNode, useState,Dispatch, SetStateAction } from "react";

interface SideBarContextProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    toggle: () => void;
}

interface SideBarContextProviderProps {
    children: ReactNode;
}

const defaultContextValue: SideBarContextProps = {
    isOpen: false,
    setIsOpen: () => {},
    toggle: () => {},
};



export const sideBarContext = createContext<SideBarContextProps>(defaultContextValue);


const SideBarProvider: React.FC<SideBarContextProviderProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

return (
    <sideBarContext.Provider value={{isOpen,setIsOpen,toggle}}>
      {children}
    </sideBarContext.Provider>
)  
}

export default SideBarProvider;