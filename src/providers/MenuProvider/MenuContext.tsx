import React from 'react';

const noop = () => void 0;

interface MenuState {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  handleMenuClick: () => void;
}

const initialState: MenuState = {
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: noop,
  handleMenuClick: noop,
};

export const MenuContext = React.createContext<MenuState>(initialState);
