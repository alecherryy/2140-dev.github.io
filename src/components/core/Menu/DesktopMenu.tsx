import React from 'react';
import { List, ListItem, Link } from '@mui/material';
import { itemSx, linkSx, menuSx } from './DesktopMenu.styles';
import { MenuProps } from 'components/core/Menu/Menu';

export const DesktopMenu = ({ items, handleClick }: MenuProps) => {
  return (
    <List sx={menuSx}>
      {items.map((item) => (
        <ListItem key={item.text} sx={itemSx}>
          <Link
            sx={linkSx}
            onClick={(e) => handleClick(e, item.anchor)}
            href={item.anchor}
          >
            {item.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
