---
'@neovici/cosmoz-badge': minor
---

Upgrade to `@neovici/cosmoz-tokens` v4 and stop reading raw scale steps.

The `error`, `warning` and `success` borders read `--cz-color-*-200`, and the
whole `processing` variant read `--cz-color-indigo-100/300/800`. Raw scale
steps are static — the token package only resolves its _semantic_ layer per
colour-scheme — so in dark mode those chips drew near-white borders and
`processing` rendered fully inverted: a pale fill with dark navy text.

Borders now derive from the scheme-aware `--cz-color-fg-*` tokens, matching the
pattern `brand` already used. `processing` has no semantic equivalent in tokens,
so it derives a `light-dark()` pair locally from the indigo ramp.

Requires `color-scheme` on the host document, per tokens v4.
