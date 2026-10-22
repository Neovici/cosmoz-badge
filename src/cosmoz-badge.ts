import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { styles } from './styles';

/**
 * A customizable badge component using cosmoz design tokens.
 *
 * @element cosmoz-badge
 *
 * @attr {string} type - Badge type: pill (default), color, modern, icon
 * @attr {string} color - Badge color: gray (default), brand, error, warning, success, processing,
 *   or any CSS color (e.g. `#7c3aed`), which tints the background, border, text and dot
 * @attr {string} size - Badge size: xs (compact), sm, md (default), lg
 * @attr {boolean} dot - Show a colored dot indicator before text
 *
 * @slot - Default slot for badge text or icon content
 * @slot prefix - Slot for content before text (icons, images, flags)
 * @slot suffix - Slot for content after text (icons)
 *
 *
 * @csspart badge - The badge container element
 * @csspart dot - The dot indicator element
 *
 * @example Basic badge
 * ```html
 * <cosmoz-badge color="brand">Label</cosmoz-badge>
 * ```
 *
 * @example Badge with dot
 * ```html
 * <cosmoz-badge color="success" dot>Active</cosmoz-badge>
 * ```
 *
 * @example Badge with icon
 * ```html
 * <cosmoz-badge color="warning">
 *   <svg slot="prefix" ...></svg>
 *   Warning
 * </cosmoz-badge>
 * ```
 */
const NAMED = ['gray', 'brand', 'error', 'warning', 'success', 'processing'];

const CosmozBadge = ({ color }: { color?: string }) => {
	const custom = !!color && !NAMED.includes(color);
	return html`<span
		class=${classMap({ badge: true, custom })}
		part="badge"
		style=${styleMap({ '--color': custom ? color : undefined })}
	>
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;
};

customElements.define(
	'cosmoz-badge',
	component(CosmozBadge, {
		observedAttributes: ['color'],
		styleSheets: [normalize, styles],
	}),
);

export { CosmozBadge };
