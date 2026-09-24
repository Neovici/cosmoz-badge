---
'@neovici/cosmoz-badge': patch
---

Read border colours from the tokens instead of mixing them locally

Every colour variant derived its border with
`color-mix(in oklab, var(--cz-color-fg-*) 40%, transparent)`, and the brand
variant mixed its background the same way. Those transforms existed because
there was no token for a subtle status border — now there is, so the badge
reads `--cz-color-border-*-subtle` and `--cz-color-bg-brand` directly.

No colour transforms remain in the component. The rendered result is close to
what the mixes produced (within 3–18 per channel for the borders); the brand
background tint is slightly stronger, which brings it in line with the other
four variants, all of which already used a `--cz-color-bg-*` semantic.

Needs the darker dark-mode `-subtle` values and `--cz-color-border-brand-subtle`
from cosmoz-tokens.
