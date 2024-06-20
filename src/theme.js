import { getColorTokens } from "./tokens.js";


/**
 * @param {object} params
 * @param {import("./tokens.js").ThemeKey} params.themeKey
 * @param {string} params.name
 * @param {'light' | 'dark'} params.type
 */
export function getTheme({ themeKey, name, type }) {
  const tokens = getColorTokens(themeKey)

  return {
    appearance: type,
    name,
    style: {
      "background": tokens['bgColor/default'],
      "border": tokens['borderColor/default'],
      "border.disabled": tokens['borderColor/disabled'],
      "border.focused": tokens['borderColor/accent-emphasis'],
      "border.selected": tokens['borderColor/accent-emphasis'],
      "border.transparent": tokens['borderColor/transparent'],
      "border.variant": tokens['borderColor/muted'],
      "conflict": tokens['fgColor/danger'],
      "conflict.background": tokens['bgColor/danger-emphasis'],
      "conflict.border": tokens['borderColor/danger-emphasis'],
    }
  }
}
