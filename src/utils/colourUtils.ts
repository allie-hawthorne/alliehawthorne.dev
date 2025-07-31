export const colours = {
  dark: 30,
  light: 220,
}

export const getDarkCss = (opacity?: number) => (
  `rgba(${colours.dark}, ${colours.dark}, ${colours.dark}${opacity ? `, ${opacity}` : ''})`
);
