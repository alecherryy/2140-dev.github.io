import React, { useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import { itemSx, menuSx } from './DesktopMenu.styles';
import { MenuProps } from 'components/core/Menu/Menu';

export const DesktopMenu = ({ items, handleClick }: MenuProps) => {
  const [active, setActive] = useState<string | null>(null);

  const handleSetActive = (to: string) => {
    setActive(to);
  };

  return (
    <List sx={menuSx}>
      {items.map((item) => (
        <ListItem key={item.text} sx={itemSx}>
          <Link
            to={item.anchor}
            smooth={true}
            duration={500}
            spy={true}
            activeStyle={{ fontWeight: 600 }}
            onSetActive={handleSetActive}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: active === item.anchor ? 600 : 400,
                cursor: 'pointer',
              }}
            >
              {item.text}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
