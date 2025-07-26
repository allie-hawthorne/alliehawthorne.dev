export const cols = {
  dark: 30,
  light: 220,
}

export function removeDatGui() {
  const existingGui = document.querySelector('.dg.main');
  if (existingGui) existingGui.remove();
}
