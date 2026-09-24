## 2.0.1

### Patch Changes

- 2669eb9: Read border colours from the tokens instead of mixing them locally

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

## 2.0.0

### Major Changes

- 4f16dad: Upgrade `@neovici/cosmoz-tokens` to v4.

### Minor Changes

- c4b274d: Fix badge colors in dark mode.

  Error, warning and success badges had a pale, almost white outline, and the
  processing badge came out completely wrong: a near-white pill with dark navy
  text, as if it had never left light mode.

  These badges picked their colors from the fixed color scale, which always
  returns light values. They now use the theme's semantic colors, which follow
  the light or dark theme automatically — so every badge color behaves the same
  way.

## 1.1.4

### Patch Changes

- 681b4d1: Use semantic color tokens for brand badges so they adapt to light and dark themes.

## 1.1.3

### Patch Changes

- 3f4770f: Add new color option, refactor the brand color and resize the type icon svg dimensions

## 1.1.2

### Patch Changes

- d4a9ece: Migrate from semantic-release to changesets

### Bug Fixes

- use inline-flex layout with proper text truncation ([#13](https://github.com/Neovici/cosmoz-badge/issues/13)) ([69fff3c](https://github.com/Neovici/cosmoz-badge/commit/69fff3c755bc357810f45728a2b0729f3625e8e8))

## [1.1.0](https://github.com/Neovici/cosmoz-badge/compare/v1.0.2...v1.1.0) (2026-04-21)

### Features

- expose CSS custom properties for badge border and background ([#12](https://github.com/Neovici/cosmoz-badge/issues/12)) ([3ee4e37](https://github.com/Neovici/cosmoz-badge/commit/3ee4e37b3b931797ebfdd81ccc088c7651c7d909))

## [1.0.2](https://github.com/Neovici/cosmoz-badge/compare/v1.0.1...v1.0.2) (2026-03-17)

### Bug Fixes

- brand color variant ([a45531d](https://github.com/Neovici/cosmoz-badge/commit/a45531d84910661b4a73a91c4535410398042444))

## [1.0.1](https://github.com/Neovici/cosmoz-badge/compare/v1.0.0...v1.0.1) (2026-03-17)

### Bug Fixes

- brand color variant for light/dark theme ([#10](https://github.com/Neovici/cosmoz-badge/issues/10)) ([67bf7f7](https://github.com/Neovici/cosmoz-badge/commit/67bf7f7321a2f7f9173b26e76c086616cca41385))

## 1.0.0 (2026-03-06)

### Features

- cosmoz-badge component ([#6](https://github.com/Neovici/cosmoz-badge/issues/6)) ([75d805b](https://github.com/Neovici/cosmoz-badge/commit/75d805b23a729ee37ccb99ec048855126d7ca4a8))
- new badge type - icon ([#9](https://github.com/Neovici/cosmoz-badge/issues/9)) ([6dbc6ee](https://github.com/Neovici/cosmoz-badge/commit/6dbc6eee0da2396e215dc1da45f8a82683825f36))

# Changelog

All notable changes to this project will be documented here.

The format is based on [Conventional Commits](https://conventionalcommits.org).
