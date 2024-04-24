import React, { MouseEvent } from 'react';
import { List, ListItem, Link } from '@mui/material';
import { itemSx, linkSx, menuSx } from './Menu.styles';
import { MENU_ITEMS } from 'constants/wording';

export const DesktopMenu = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    document
      ?.querySelector(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <List sx={menuSx}>
      {MENU_ITEMS.map((item) => (
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
