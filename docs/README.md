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
<!-- Default badge -->
<cosmoz-badge>Default</cosmoz-badge>

<!-- Error badge -->
<cosmoz-badge variant="error">Error</cosmoz-badge>

<!-- Warning badge -->
<cosmoz-badge variant="warning">Warning</cosmoz-badge>

<!-- Success badge -->
<cosmoz-badge variant="success">Success</cosmoz-badge>

<!-- Modern badge -->
<cosmoz-badge variant="modern">Modern</cosmoz-badge>
```

## Attributes

| Attribute | Type   | Default   | Description                              |
| --------- | ------ | --------- | ---------------------------------------- |
| `variant` | string | `default` | default, error, warning, success, modern |
| `size`    | string | `md`      | sm, md, lg                               |
| `shape`   | string | `rounded` | rounded, square                          |

## Variants

### Style Variants

| Variant   | Description                              |
| --------- | ---------------------------------------- |
| `default` | Secondary background, neutral border     |
| `error`   | Error background, error text and border  |
| `warning` | Warning background, warning text/border  |
| `success` | Success background, success text/border  |
| `modern`  | Primary background, shadow, neutral text |

### Size Variants

| Size | Height                    | Font Size |
| ---- | ------------------------- | --------- |
| `sm` | 5 units(20px)             | xs        |
| `md` | 5.5 units(22px) (default) | sm        |
| `lg` | 6.5 units(26px)           | sm        |

### Shape Variants

| Shape     | Description                          |
| --------- | ------------------------------------ |
| `rounded` | Full border radius(9999px) (default) |
| `square`  | Small border radius(6px)             |

## Icons

The badge supports prefix and suffix icon slots:

```html
<!-- Prefix icon -->
<cosmoz-badge variant="warning">
	<svg slot="prefix" width="16" height="16">...</svg>
	Warning
</cosmoz-badge>

<!-- Suffix icon -->
<cosmoz-badge variant="error">
	Error
	<svg slot="suffix" width="16" height="16">...</svg>
</cosmoz-badge>
```

## Styling

The badge exposes a `badge` part for external styling:

```css
cosmoz-badge::part(badge) {
	/* Custom styles */
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
