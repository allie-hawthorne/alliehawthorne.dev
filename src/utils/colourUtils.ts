export const cols = {
  dark: 30,
  light: 220,
}

export const getColDarkCss = (opacity?: number) => (
  `rgba(${cols.dark}, ${cols.dark}, ${cols.dark}${opacity ? `, ${opacity}` : ''})`
);
