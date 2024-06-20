import lightColors from "@primer/primitives/dist/figma/themes/light.json" with { type: 'json' }
import lightColorblindColors from "@primer/primitives/dist/figma/themes/light-colorblind.json" with { type: 'json' }
import lightHighContrastColors from "@primer/primitives/dist/figma/themes/light-high-contrast.json" with { type: 'json' }
import lightTritanopiaColors from "@primer/primitives/dist/figma/themes/light-tritanopia.json" with { type: 'json' }

import darkColors from "@primer/primitives/dist/figma/themes/dark.json" with { type: 'json' }
import darkColorblindColors from "@primer/primitives/dist/figma/themes/dark-colorblind.json" with { type: 'json' }
import darkHighContrastColors from "@primer/primitives/dist/figma/themes/dark-high-contrast.json" with { type: 'json' }
import darkTritanopiaColors from "@primer/primitives/dist/figma/themes/dark-tritanopia.json" with { type: 'json' }
import darkDimmedColors from "@primer/primitives/dist/figma/themes/dark-dimmed.json" with { type: 'json' }

const themes = {
  'light': lightColors,
  'light_colorblind': lightColorblindColors,
  'light_high_contrast': lightHighContrastColors,
  'light_tritanopia': lightTritanopiaColors,
  'dark': darkColors,
  'dark_colorblind': darkColorblindColors,
  'dark_high_contrast': darkHighContrastColors,
  'dark_tritanopia': darkTritanopiaColors,
  'dark_dimmed': darkDimmedColors,
};

/**
 * @typedef {keyof typeof themes} ThemeKey
 */


/**
 * Convert an rgba color to a hex color.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
function rgbaToHexA(r, g, b, a) {
  return `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}${Math.round(a * 255).toString(16).padStart(2, '0')}`;
}

/**
 * Remap the theme to a format that is easier to use in the code.
 * @param {typeof lightColors} theme
 */
function remapTheme(theme) {
  // imported themes are in the format with { type: 'json' }
  // [
  //   { name: "some/token", value: { r: 1, g: 1 b: 1 a: 1 } }
  // ]
  //
  // we want to convert it to
  // {
  //  "some/token": "#rrggbbaa"
  // }

  return theme.reduce(
    (/** @type Record<string, string> */ acc, token) => {
      if (token.type !== 'COLOR' || !token.value) return acc;
      const { name, value } = token;
      const color = rgbaToHexA(value.r, value.g, value.b, value.a);
      acc[name] = color;
      return acc;
    },
    {}
  );
}

/**
 * @param {ThemeKey} theme
 */
export function getColorTokens(theme) {
  return remapTheme(themes[theme]);
}
