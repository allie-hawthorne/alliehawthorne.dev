export const cols = {
  dark: 30,
  light: 220,
}

export const getColDarkCss = (opacity?: number) => (
  `rgba(${cols.dark}, ${cols.dark}, ${cols.dark}${opacity ? `, ${opacity}` : ''})`
);

export function removeDatGui() {
  const existingGui = document.querySelector('.dg.main');
  if (existingGui) existingGui.remove();
}
