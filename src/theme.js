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

      "conflict": tokens['fgColor/severe'],
      "conflict.background": tokens['bgColor/severe-emphasis'],
      "conflict.border": tokens['borderColor/severe-emphasis'],

      "created": tokens['fgColor/accent'],
      "created.background": tokens['bgColor/accent-emphasis'],
      "created.border": tokens['borderColor/accent-emphasis'],

      "deleted": tokens['fgColor/danger'],
      "deleted.background": tokens['bgColor/danger-emphasis'],
      "deleted.border": tokens['borderColor/danger-emphasis'],

      "drop_target.background": tokens['bgColor/accent-muted'],

      "editor.active_line.background": tokens['bgColor/muted'],
      "editor.active_line_number": tokens['fgColor/muted'],
      "editor.active_wrap_guide": tokens['borderColor/muted'],
      "editor.background": tokens['bgColor/default'],
      "editor.document_highlight.read_background": tokens['bgColor/neutral-muted'],
      "editor.document_highlight.write_background": tokens['bgColor/neutral-emphasis'],
      "editor.foreground": tokens['fgColor/default'],
      "editor.gutter.background": tokens['bgColor/default'],
      "editor.highlighted_line.background": tokens['bgColor/accent-muted'],
      "editor.invisible": tokens['fgColor/disabled'],
      "editor.line_number": tokens['fgColor/muted'],
      "editor.subheader.background": tokens['bgColor/muted'],
      "editor.wrap_guide": tokens['borderColor/muted'],

      "element.active": tokens['bgColor/accent-emphasis'],
      "element.background": tokens['bgColor/accent-muted'],
      "element.disabled": tokens['bgColor/disabled'],
      "element.hover": tokens['bgColor/accent-emphasis'],
      "element.selected": tokens['bgColor/accent-muted'],

      "elevated_surface.background": tokens['bgColor/muted'],

      "error": tokens['fgColor/danger'],
      "error.background": tokens['bgColor/danger-emphasis'],
      "error.border": tokens['borderColor/danger-emphasis'],

      "ghost_element.active": tokens['bgColor/neutral-muted'],
      "ghost_element.background": tokens['bgColor/transparent'],
      "ghost_element.disabled": tokens['bgColor/disabled'],
      "ghost_element.hover": tokens['bgColor/defay'],
      "ghost_element.selected": tokens['bgColor/neutral-muted'],
      
    }
  }
}
