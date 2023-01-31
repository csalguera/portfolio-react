export const hyphenateWords = (str) => {
  return str.toLowerCase()
  .replaceAll(' ', '-')
  .replaceAll("'", '_')
  .replaceAll(',', '-')
}