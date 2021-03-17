// colors
export const colors = {
  pink1: '224, 105, 105',
  pink2: '230, 119, 119',
  darkgrey1: '54, 54, 54',
  darkgrey2: '74, 74, 74',
  lightgrey1: '250, 250, 250',
};

// boxShadow

export const boxShadow = (size, color = colors.darkgrey1) => {
  if (size === 'small') {
    return `0 2px 10px -8px rgba(${color})`;
  } else if (size === 'medium') {
    return `0 2px 11px -7px rgba(${color})`;
  } else if (size === 'big') {
    return `0 2px 12px -6px rgba(${color})`;
  }
};

export const breakpoints = (bp) => {
  if (bp === 'xsm') {
    return `(min-width: 350px)`;
  } else if (bp === 'sm') {
    return `(min-width: 600px)`;
  } else if (bp === 'md') {
    return `(min-width: 960px)`;
  } else if (bp === 'lg') {
    return `(min-width: 1280px)`;
  } else if (bp === 'xl') {
    return `(min-width: 1920px)`;
  }
};
