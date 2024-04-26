import React from 'react';
import { List, ListItem, Link, Box, ButtonBase } from '@mui/material';
import MenuOpen from '../../../images/menu-open.svg';
import MenuClose from '../../../images/menu-close.svg';
import { buttonSx, iconSx, itemSx, linkSx, menuSx } from './MobileMenu.styles';
import { MenuProps } from 'components/core/Menu/Menu';
import { useMenuContext } from 'providers/MenuProvider/hooks/useMenuContext';

export const MobileMenu = ({ items, handleClick }: MenuProps) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMenuContext();

  const handleMenuItemClick = () => {
    const body = document?.querySelector('body');
    if (body) {
      body.style.overflowY = !isMobileMenuOpen ? 'hidden' : 'auto';
    }

    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box>
      <MenuIcon isOpen={isMobileMenuOpen} handleClick={handleMenuItemClick} />
      <List
        sx={{
          ...menuSx,
          ...(isMobileMenuOpen && {
            display: 'flex',
          }),
        }}
      >
        {items.map((item) => (
          <ListItem key={item.text} sx={itemSx}>
            <Link
              sx={linkSx}
              onClick={(e) => {
                handleClick(e, item.anchor);
                handleMenuItemClick();
              }}
              href={item.anchor}
            >
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const MenuIcon = ({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box sx={iconSx}>
      <ButtonBase sx={buttonSx} onClick={handleClick}>
        <img src={isOpen ? MenuClose : MenuOpen} alt="Mobile menu icon" />
      </ButtonBase>
    </Box>
  );
};
