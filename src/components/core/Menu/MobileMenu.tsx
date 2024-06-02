import React from 'react';
import { List, ListItem, Box, ButtonBase, Typography } from '@mui/material';
import MenuOpen from '../../../images/menu-open.svg';
import MenuClose from '../../../images/menu-close.svg';
import { buttonSx, iconSx, itemSx, menuSx } from './MobileMenu.styles';
import { MenuProps } from 'components/core/Menu/Menu';
import { useMenuContext } from 'providers/MenuProvider/hooks/useMenuContext';
import { Button } from 'components/core/Button/Button';
import { colors } from 'theme/colors';
import { Link } from 'react-scroll';

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
      <Box sx={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
        <List sx={menuSx}>
          {items.map((item) => (
            <ListItem key={item.text} sx={itemSx}>
              <Link onClick={handleMenuItemClick} spy={true} to={item.anchor}>
                <Typography
                  variant="h3"
                  component="span"
                  sx={{ cursor: 'pointer' }}
                >
                  {item.text}
                </Typography>
              </Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              ...itemSx,
              position: 'static',
              mt: 20,
              '&::before': {
                content: '""',
                background: colors.yellow[50],
                position: 'absolute',
                height: '100vh',
                borderRadius: '100%',
                top: '45vh',
                left: '-22vh',
                width: '100vh',
              },
            }}
          >
            <Button variant="large">Donate</Button>
          </ListItem>
        </List>
      </Box>
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
