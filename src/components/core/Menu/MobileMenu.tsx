import React from 'react';
import { List, ListItem, Box, ButtonBase, Typography } from '@mui/material';
import MenuOpen from '../../../images/menu-open.svg';
import MenuClose from '../../../images/menu-close.svg';
import { buttonSx, iconSx, mobileItemSx, mobileMenuSx } from './Menu.styles';
import { MenuProps } from 'components/core/Menu/Menu';
import { useMenuContext } from 'providers/MenuProvider/hooks/useMenuContext';
import { Button } from 'components/core/Button/Button';
import { colors } from 'theme/colors';
import { Link } from 'react-scroll';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export const MobileMenu = ({ items }: MenuProps) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMenuContext();

  const handleClick = (el: HTMLElement) => {
    const offset = 80;
    const position = el.getBoundingClientRect().top;
    const top = position + window.pageYOffset - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });

    handleMenuItemClick();
  };

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
        <List sx={mobileMenuSx}>
          {items.map((item) => (
            <ListItem key={item.text} sx={mobileItemSx}>
              <NavHashLink
                style={{ textDecoration: 'none' }}
                smooth
                scroll={(el) => handleClick(el)}
                to={`/#${item.anchor}`}
              >
                <Typography
                  variant="h3"
                  component="span"
                  sx={{ cursor: 'pointer' }}
                >
                  {item.text}
                </Typography>
              </NavHashLink>
              <Link
                onClick={handleMenuItemClick}
                spy={true}
                to={item.anchor}
              ></Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              ...mobileItemSx,
              position: 'static',
              mt: 20,
              '&::before': {
                content: '""',
                background: colors.yellow[200],
                position: 'absolute',
                height: '100vh',
                borderRadius: '100%',
                top: '45vh',
                left: '-22vh',
                width: '100vh',
              },
            }}
          >
            <NavLink to="donate" onClick={handleMenuItemClick}>
              <Button variant="donate" component="span">
                Donate
              </Button>
            </NavLink>
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
