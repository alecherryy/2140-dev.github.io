import React, { MouseEvent } from 'react';
import { Link, List, ListItem } from '@mui/material';
import { itemSx, linkSx, menuSx } from './Menu.styles';

const MENU_ITEMS = [
  {
    text: 'About',
    anchor: '#about'
  },
  {
    text: 'Team',
    anchor: '#team'
  },
  {
    text: 'Donate',
    anchor: '#donate'
  }
]
export const Menu = () => {
  
  // const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   console.log(e?.target)
  //   // if (e?.target?.href) {
  //   //   document.getElementById(e.target.href).scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   // }
  // }
  return (
    <nav>
      <List sx={menuSx}>
        {MENU_ITEMS.map((item) => (
          <ListItem sx={itemSx}>
            <Link sx={linkSx}
              // onClick={(e) => handleClick(e)}
                  href={item.anchor}>{item.text}</Link>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}