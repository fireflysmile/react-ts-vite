/*
 * Media queries utility
 */

/*
 * Inspired by https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};


// console.log(theme.breakpoints)

// Iterate through the sizes and create min-width media queries
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, size) => {
    acc[size] = () => `@media (min-width:${sizes[size]}px)`;
    return acc;
  },
  {} as { [key in keyof typeof sizes]: () => string },
);

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.md} {
    display: block
  }
`;
*/