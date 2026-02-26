import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { styles } from './styles';

export type BadgeType = 'pill' | 'color' | 'modern';
export type BadgeColor = 'gray' | 'brand' | 'error' | 'warning' | 'success';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface CosmozBadgeElement extends HTMLElement {
	type: BadgeType;
	color: BadgeColor;
	size: BadgeSize;
	dot: boolean;
}

const observedAttributes = ['type', 'color', 'size', 'dot'] as const;

/**
 * A customizable badge component using cosmoz design tokens.
 *
 * @element cosmoz-badge
 *
 * @attr {string} type - Badge type: pill (default), color, modern
 * @attr {string} color - Badge color: gray (default), brand, error, warning, success
 * @attr {string} size - Badge size: sm, md (default), lg
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
const CosmozBadge = (host: CosmozBadgeElement) => {
	const dot = host.hasAttribute('dot');

	return html`<span class="badge" part="badge" role="status">
		${when(
			dot,
			() => html`<span class="dot" part="dot"></span>`,
			() => nothing,
		)}
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;
};

customElements.define(
	'cosmoz-badge',
	component<CosmozBadgeElement>(CosmozBadge, {
		observedAttributes,
		styleSheets: [normalize, styles],
	}),
);

export { CosmozBadge };
