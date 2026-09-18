---
'@neovici/cosmoz-badge': minor
---

Fix badge colors in dark mode.

Error, warning and success badges had a pale, almost white outline, and the
processing badge came out completely wrong: a near-white pill with dark navy
text, as if it had never left light mode.

These badges picked their colors from the fixed color scale, which always
returns light values. They now use the theme's semantic colors, which follow
the light or dark theme automatically.

Also upgrades to cosmoz-tokens v4. Dark mode now follows the page's
`color-scheme` instead of a CSS class.
