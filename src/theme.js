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
    "$schema": "https://zed.dev/schema/themes/v0.1.0.json",
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

      "created": tokens['fgColor/success'],
      "created.background": tokens['bgColor/success-emphasis'],
      "created.border": tokens['borderColor/success-emphasis'],

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

      "hint": tokens['fgColor/muted'],
      "hint.background": tokens['bgColor/muted'],
      "hint.border": tokens['borderColor/muted'],

      "icon": tokens['fgColor/default'],
      "icon.background": tokens['bgColor/default'],
      "icon.border": tokens['borderColor/default'],
      "icon.accent": tokens['fgColor/accent'],
      "icon.muted": tokens['fgColor/muted'],
      "icon.disabled": tokens['fgColor/disabled'],
      "icon.placeholder": tokens['fgColor/fgColor/placeholder'],

      "ignored": tokens['fgColor/disabled'],
      "ignored.background": tokens['bgColor/disabled'],
      "ignored.border": tokens['borderColor/disabled'],

      "info": tokens['fgColor/default'],
      "info.background": tokens['bgColor/default'],
      "info.border": tokens['borderColor/default'],

      "link_text.hover": tokens['fgColor/link'],

      "modified": tokens['fgColor/attention'],
      "modified.background": tokens['bgColor/attention-emphasis'],
      "modified.border": tokens['borderColor/attention-emphasis'],

      "pane.focused_border": tokens['borderColor/default'],
      "panel.background": tokens['bgColor/inset'],
      "panel.focused_border": tokens['borderColor/default'],

      "predictive": tokens['fgColor/placeholder'],
      "predictive.background": tokens['bgColor/neutral-muted'],
      "predictive.border": tokens['borderColor/neutral-muted'],

      "renamed": tokens['fgColor/success'],
      "renamed.background": tokens['bgColor/success-emphasis'],
      "renamed.border": tokens['borderColor/success-emphasis'],

      "scrollbar.thumb.border": tokens['borderColor/transparent'],
      "scrollbar.thumb.hover_background": tokens['bgColor/muted'],
      "scrollbar.track.background": tokens['bgColor/transparent'],
      "scrollbar.track.border": tokens['borderColor/transparent'],
      "scrollbar_thumb.background": tokens['bgColor/neutal-muted'],

      "search.match_background": tokens['bgColor/attention-muted'],

      "status_bar.background": tokens['bgColor/inset'],

      "success": tokens['fgColor/success'],
      "success.background": tokens['bgColor/success-emphasis'],
      "success.border": tokens['borderColor/success-emphasis'],

      "surface.background": tokens['bgColor/inset'],

      "tab.active_background": tokens['bgColor/default'],
      "tab.inactive_background": tokens['bgColor/inset'],
      "tab_bar.background": tokens['bgColor/inset'],

      "terminal.ansi.black": tokens['color/ansi/black'],
      "terminal.ansi.bright_black": tokens['color/ansi/black-bright'],
      "terminal.ansi.dim_black": tokens['color/ansi/black'],
      "terminal.ansi.blue": tokens['color/ansi/blue'],
      "terminal.ansi.bright_blue": tokens['color/ansi/blue-bright'],
      "terminal.ansi.dim_blue": tokens['color/ansi/blue'],
      "terminal.ansi.cyan": tokens['color/ansi/cyan'],
      "terminal.ansi.bright_cyan": tokens['color/ansi/cyan-bright'],
      "terminal.ansi.dim_cyan": tokens['color/ansi/cyan'],
      "terminal.ansi.green": tokens['color/ansi/green'],
      "terminal.ansi.bright_green": tokens['color/ansi/green-bright'],
      "terminal.ansi.dim_green": tokens['color/ansi/green'],
      "terminal.ansi.magenta": tokens['color/ansi/magenta'],
      "terminal.ansi.bright_magenta": tokens['color/ansi/magenta-bright'],
      "terminal.ansi.dim_magenta": tokens['color/ansi/magenta'],
      "terminal.ansi.red": tokens['color/ansi/red'],
      "terminal.ansi.bright_red": tokens['color/ansi/red-bright'],
      "terminal.ansi.dim_red": tokens['color/ansi/red'],
      "terminal.ansi.white": tokens['color/ansi/white'],
      "terminal.ansi.bright_white": tokens['color/ansi/white-bright'],
      "terminal.ansi.dim_white": tokens['color/ansi/white'],
      "terminal.ansi.yellow": tokens['color/ansi/yellow'],
      "terminal.ansi.bright_yellow": tokens['color/ansi/yellow-bright'],
      "terminal.ansi.dim_yellow": tokens['color/ansi/yellow'],

      "terminal.background": tokens['bgColor/inset'],
      "terminal.bright_foreground": tokens['fgColor/onEmphasis'],
      "terminal.dim_foreground": tokens['fgColor/default'],
      "terminal.foreground": tokens['fgColor/muted'],

      "text": tokens['fgColor/default'],
      "text.accent": tokens['fgColor/accent'],
      "text.disabled": tokens['fgColor/disabled'],
      "text.muted": tokens['fgColor/muted'],
      "text.placeholder": tokens['fgColor/placeholder'],

      "title_bar.background": tokens['bgColor/inset'],
      "toolbar.background": tokens['bgColor/default'],

      "unreachable": tokens['fgColor/disabled'],
      "unreachable.background": tokens['bgColor/disabled'],
      "unreachable.border": tokens['borderColor/disabled'],

      "warning": tokens['fgColor/warning'],
      "warning.background": tokens['bgColor/warning-emphasis'],
      "warning.border": tokens['borderColor/warning-emphasis'],

      "players":
        [
          "blue",
          "orange",
          "pink",
          "green",
          "purple",
          "yellow",
          "teal",
          "red"
        ].map(color => ({
          "cursor": tokens[`data/${color}/color`],
          "background": tokens[`data/${color}/color/muted`],
          "border": tokens[`data/${color}/color/muted`]
        })),

      "syntax": {
        "attribute": {
          "color": tokens['color/prettylights/syntax/variable']
        },
        "boolean": {
          "color": tokens['color/prettylights/syntax/constant']
        },
        "comment": {
          "color": tokens['color/prettylights/syntax/comment']
        },
        "comment.doc": {
          "color": tokens['color/prettylights/syntax/comment']
        },
        "constant": {
          "color": tokens['color/prettylights/syntax/constant']
        },
        "constructor": {
          "color": tokens['color/prettylights/syntax/entity-tag']
        },
        "embedded": {
          "color": null
        },
        "emphasis": {
          "color": tokens['color/prettylights/syntax/markup/italic']
        },
        "emphasis.stong": {
          "color": tokens['color/prettylights/syntax/markup/bold'],
          "font_weight": 700
        },
        "enum": {
          "color": tokens['color/prettylights/syntax/constant']
        },
        "function": {
          "color": tokens['color/prettylights/syntax/entity']
        },
        "hint": {
          "color": tokens['mode/color/prettylights/syntax/string']
        },
        "keyword": {
          "color": tokens['color/prettylights/syntax/keyword']
        },
        "label": {
          "color": tokens['color/prettylights/syntax/entity']
        },
        "link_text": {
          "color": tokens['color/prettylights/syntax/string']
        },
        "link_uri": {
          "color": tokens['color/prettylights/syntax/string']
        },
        "number": {
          "color": tokens['color/prettylights/syntax/constant']
        },
        "operator": {
          "color": tokens['color/prettylights/syntax/keyword']
        },
        "predictive": {
          "color": tokens['color/prettylights/syntax/comment']
        },
        "preproc": {
          "color": null
        },
        "primary": {
          "color": null
        },
        "property": {
          "color": tokens['color/prettylights/syntax/variable']
        },
        "punctuation": {
          "color": null
        },
        "punctuation.bracket": {
          "color": null
        },
        "punctuation.delimiter": {
          "color": null
        },
        "punctuation.list_marker": {
          "color": null
        },
        "punctuation.special": {
          "color": null
        },
        "string": {
          "color": tokens['color/prettylights/syntax/string']
        },
        "string.escape": {
          "color": tokens['color/prettylights/syntax/string-regexp']
        },
        "string.regex": {
          "color": tokens['color/prettylights/syntax/string-regexp']
        },
        "string.special": {
          "color": tokens['color/prettylights/syntax/string-regexp']
        },
        "string.special.symbol": {
          "color": tokens['color/prettylights/syntax/string-regexp']
        },
        "tag": {
          "color": tokens['color/prettylights/syntax/entity-tag']
        },
        "text.literal": {
          "color": tokens['color/prettylights/syntax/string']
        },
        "title": {
          "color": null
        },
        "type": {
          "color": tokens['color/prettylights/syntax/entity']
        },
      }
    }
  }
}

