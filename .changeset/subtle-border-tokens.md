---
'@neovici/cosmoz-badge': patch
---

Read border colours from the tokens instead of mixing them locally

Every colour variant derived its border with
`color-mix(in oklab, var(--cz-color-fg-*) 40%, transparent)`, and the brand
variant mixed its background the same way. Those transforms existed because
there was no token for a subtle status border — now there is, so the badge
reads `--cz-color-border-*-subtle` and `--cz-color-bg-brand-subtle` directly.

No colour transforms remain in the component. The rendered result is close to
what the mixes produced (within 3–18 per channel for the borders); the brand
background is now a proper tinted surface in dark, where the mix happened to
produce one by accident and the obvious token (`bg-brand`) is a mid-tone
highlight colour that would have put brand text at 1.31:1.

Needs `--cz-color-bg-brand-subtle` from cosmoz-tokens.
