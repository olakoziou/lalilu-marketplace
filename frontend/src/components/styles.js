// colors
export const colors = {
  mainblue: '203, 245, 248',
  pink2: '230, 119, 119',
  yellow: '244, 175, 27',
  yellow2: '223, 175, 27',
  darkgrey1: '54, 54, 54',
  darkgrey2: '74, 74, 74',
  darkgrey3: '88, 88, 88',
  darkgrey4: '165, 165, 165',
  lightgrey1: '250, 250, 250',
  lightgrey2: '245, 245, 245',
  lightgrey3: '240, 240, 240',
  lightgrey4: '240, 240, 240',
};

// boxShadow

export const boxShadow = (size, color = colors.darkgrey1) => {
  if (size === 'xsmall') {
    return `0 1px 7px -5px rgba(${color})`;
  } else if (size === 'small') {
    return `0 1px 10px -6px rgba(${color})`;
  } else if (size === 'medium') {
    return `0 1px 11px -7px rgba(${color})`;
  } else if (size === 'big') {
    return `0 1px 12px -1px rgba(${color})`;
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
