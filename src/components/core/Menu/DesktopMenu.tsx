import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import { Link } from 'react-scroll';
import { itemSx, menuSx } from './DesktopMenu.styles';
import { MenuProps } from 'components/core/Menu/Menu';
import { Button } from 'components/core/Button/Button';

export const DesktopMenu = ({ items }: MenuProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 5, justifyContent: 'flex-end' }}>
      <List sx={menuSx}>
        {items.map((item) => (
          <ListItem key={item.text} sx={itemSx}>
            <Link
              to={item.anchor}
              smooth={true}
              duration={500}
              spy={true}
              activeStyle={{ fontWeight: 600 }}
            >
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Button variant="secondary">Donate</Button>
    </Box>
  );
};
