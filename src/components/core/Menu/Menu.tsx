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
}

const commonProps: MenuProps = {
  items: MENU_ITEMS,
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
