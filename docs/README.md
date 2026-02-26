# cosmoz-badge

A customizable badge web component built with [Untitled UI](https://www.untitledui.com/) design tokens.

Part of the [Neovici](https://neovici.se) design system.

## Installation

```bash
npm install @neovici/cosmoz-badge
```

## Usage

```javascript
import '@neovici/cosmoz-badge';
```

```html
<!-- Default badge (pill, gray) -->
<cosmoz-badge>Label</cosmoz-badge>

<!-- Brand color -->
<cosmoz-badge color="brand">Brand</cosmoz-badge>

<!-- Error color -->
<cosmoz-badge color="error">Error</cosmoz-badge>

<!-- Color type (square corners) -->
<cosmoz-badge type="color" color="brand">Color</cosmoz-badge>

<!-- Modern type (shadow, neutral colors) -->
<cosmoz-badge type="modern">Modern</cosmoz-badge>
```

## Attributes

| Attribute | Type    | Default | Description                                                 |
| --------- | ------- | ------- | ----------------------------------------------------------- |
| `type`    | string  | `pill`  | Badge type: `pill`, `color`, `modern`                       |
| `color`   | string  | `gray`  | Badge color: `gray`, `brand`, `error`, `warning`, `success` |
| `size`    | string  | `md`    | Badge size: `sm`, `md`, `lg`                                |
| `dot`     | boolean | `false` | Show a colored dot indicator before text                    |

## Type Variants

| Type     | Description                                       |
| -------- | ------------------------------------------------- |
| `pill`   | Full border radius (rounded pill shape) — default |
| `color`  | Small border radius (square corners)              |
| `modern` | Small border radius, box shadow, neutral bg/text  |

## Color Variants

| Color     | Description                                    |
| --------- | ---------------------------------------------- |
| `gray`    | Secondary background, neutral border — default |
| `brand`   | Brand background, brand text and border        |
| `error`   | Error background, error text and border        |
| `warning` | Warning background, warning text/border        |
| `success` | Success background, success text/border        |

> **Note:** The `modern` type always uses neutral background/text/border regardless of the `color` attribute. The `color` attribute still affects the dot indicator color in modern badges.

## Size Variants

| Size | Font Size    |
| ---- | ------------ |
| `sm` | xs           |
| `md` | sm (default) |
| `lg` | sm           |

## Dot Indicator

Add the `dot` attribute to show a colored dot before the label. The dot color follows the badge `color` scheme.

```html
<cosmoz-badge dot color="success">Active</cosmoz-badge>
<cosmoz-badge dot type="modern" color="brand">Brand</cosmoz-badge>
```

## Icons

The badge supports `prefix` and `suffix` icon slots:

```html
<!-- Prefix icon -->
<cosmoz-badge color="warning">
	<svg slot="prefix" width="12" height="12">...</svg>
	Warning
</cosmoz-badge>

<!-- Suffix icon -->
<cosmoz-badge color="error">
	Error
	<svg slot="suffix" width="12" height="12">...</svg>
</cosmoz-badge>
```

## Slots

| Slot     | Description                                |
| -------- | ------------------------------------------ |
| default  | Badge text or content                      |
| `prefix` | Content before text (icons, images, flags) |
| `suffix` | Content after text (icons)                 |

## CSS Parts

| Part    | Description                 |
| ------- | --------------------------- |
| `badge` | The badge container element |
| `dot`   | The dot indicator element   |

## Styling

The badge exposes CSS parts for external styling:

```css
cosmoz-badge::part(badge) {
	/* Custom styles */
}

cosmoz-badge::part(dot) {
	/* Custom dot styles */
}
```

## Design Tokens

This component uses CSS custom properties from `@neovici/cosmoz-tokens`. The tokens are automatically applied but can be customized at the application level.

## Accessibility

The badge uses `role="status"` on its inner element. When using badges to convey important status information, ensure the content is descriptive enough for screen readers.

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook:start

# Run tests
npm run test

# Build
npm run build
```

## License

Apache-2.0
