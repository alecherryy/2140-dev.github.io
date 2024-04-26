import { MenuContext } from 'providers/MenuProvider/MenuContext';
import React, { FC, ReactNode, useState } from 'react';

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    const body = document?.querySelector('body');
    if (body) {
      body.style.overflowY = !isMobileMenuOpen ? 'hidden' : 'auto';
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const contextValue = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleMenuClick,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
