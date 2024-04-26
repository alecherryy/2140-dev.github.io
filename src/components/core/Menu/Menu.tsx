import React, { MouseEvent } from 'react';
import { DesktopMenu } from 'components/core/Menu/DesktopMenu';
import { MobileMenu } from 'components/core/Menu/MobileMenu';
import { MENU_ITEMS } from 'constants/wording';

interface MenuItem {
  text: string;
  anchor: string;
}

export interface MenuProps {
  items: MenuItem[];
  handleClick: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const handleClick = (e: MouseEvent, id: string) => {
  e.preventDefault();

  document
    ?.querySelector(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const commonProps: MenuProps = {
  items: MENU_ITEMS,
  handleClick: handleClick,
};

interface Props {
  isMobile: boolean;
}
export const Menu = ({ isMobile }: Props) => {
  return isMobile ? (
    <MobileMenu {...commonProps} />
  ) : (
    <DesktopMenu {...commonProps} />
  );
};
