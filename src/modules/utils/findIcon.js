export async function findIcon(iconName) {
  const iconModule = await import(`../../assets/icons/${iconName}.png`);
  return iconModule.default;
}
