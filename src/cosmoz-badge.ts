import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { styles } from './styles';

export type BadgeVariant =
	| 'default'
	| 'error'
	| 'warning'
	| 'success'
	| 'modern';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeShape = 'rounded' | 'square';
export interface CosmozBadgeElement extends HTMLElement {
	variant: BadgeVariant;
	size: BadgeSize;
	shape: BadgeShape;
}

const observedAttributes = ['variant', 'size', 'shape'] as const;

/**
 * A customizable badge component using Untitled UI design tokens.
 *
 * @element cosmoz-badge
 *
 * @attr {string} variant - Badge style variant: default (default), error, warning, success, modern
 * @attr {string} size - Badge size: sm, md (default), lg
 * @attr {string} shape - Badge shape: rounded (default), square
 *
 * @slot - Default slot for badge text content
 * @slot prefix - Slot for prefix icon (before text)
 * @slot suffix - Slot for suffix icon (after text)
 *
 * @csspart badge - The native badge element
 */
const CosmozBadge = () => {
	return html`<span class="badge" part="badge" role="status">
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
