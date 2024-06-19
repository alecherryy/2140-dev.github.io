import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import { desktopItemSx, desktopMenuSx } from './Menu.styles';
import { MenuProps } from 'components/core/Menu/Menu';
import { Button } from 'components/core/Button/Button';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export const DesktopMenu = ({ items }: MenuProps) => {
  const handleClick = (el: HTMLElement) => {
    const offset = 80;
    const position = el.getBoundingClientRect().top;
    const top = position + window.pageYOffset - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  };
  return (
    <Box sx={{ display: 'flex', gap: 5, justifyContent: 'flex-end' }}>
      <List sx={desktopMenuSx}>
        {items.map((item) => (
          <ListItem key={item.text} sx={desktopItemSx}>
            <NavHashLink
              style={{ textDecoration: 'none' }}
              smooth
              scroll={(el) => handleClick(el)}
              to={`/#${item.anchor}`}
            >
              {item.text}
            </NavHashLink>
          </ListItem>
        ))}
      </List>
      <NavLink to="donate">
        <Button variant="secondary" component="span">
          Donate
        </Button>
      </NavLink>
    </Box>
  );
};
