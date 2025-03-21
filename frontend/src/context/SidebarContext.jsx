import { createContext, useContext, useState } from 'react';

// Create the context
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarVisible(!isSideBarVisible);
  };

  return (
    <SidebarContext.Provider value={{ isSideBarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);
