import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { styles } from './styles';

const CosmozBadge = () => {
	return html`<span class="badge" part="badge" role="status">
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;
};

customElements.define(
	'cosmoz-badge',
	component(CosmozBadge, {
		styleSheets: [normalize, styles],
	}),
);

export { CosmozBadge };
