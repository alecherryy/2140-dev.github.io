import { useContext } from 'react';

import { MenuContext } from '../MenuContext';

/*
  Use this hook instead of directly calling context in components
  for easier testing of the menu context
*/
export function useMenuContext() {
  return useContext(MenuContext);
}
