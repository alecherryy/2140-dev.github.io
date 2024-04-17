/**
 * Helper function to join multiple classes names and return them
 * as a signle string.
 *
 * @param className default class name
 * @param modifierClasses modifier class for additional styles
 * @returns a string
 */
export const mergeClassNames = (className: string, modifierClasses: string) => {
  return [className, modifierClasses].join(' ').trim();
};

/**
 * Check screen size and return a boolean.
 *
 * @name isDesktopScreenWidth
 * @param {function} func - Do something on screen resize.
 */
export const isDesktopScreenWidth = (func: any) => {
  window.addEventListener('resize', () => {
    setTimeout(() => {
      func()
    }, 200);
  });

  return () => window.removeEventListener('resize', func);
};

/**
 * Util function to convert a ISO date into a string
 * @name formatDateString
 * @param date
 */
export const formatDateString = (date: string = '') => {
  return new Date(date).toLocaleDateString();
};

/**
 * Given a string, convert its value to boolean
 *
 * @param str to convert
 * @return a boolean
 */
export const convertStringToBoolean = (str: string) => {
  switch (str) {
    case "true":
      return true;
    default:
      return false;
  }
};