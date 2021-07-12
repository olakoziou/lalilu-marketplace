export const polishSigns = (input) => {
  return input
    .toLowerCase()
    .split('')
    .map((el) => {
      return el
        .replace('ą', 'a')
        .replace('ę', 'e')
        .replace('ó', 'o')
        .replace('ś', 's')
        .replace('ł', 'l')
        .replace('ż', 'z')
        .replace('ź', 'z')
        .replace('ć', 'c')
        .replace('ń', 'n');
    })
    .join('');
};
