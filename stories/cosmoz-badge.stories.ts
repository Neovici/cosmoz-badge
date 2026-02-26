import { arrowRightIcon, arrowUpIcon } from '@neovici/cosmoz-icons/untitled';
import { html } from 'lit-html';
import '../src/cosmoz-badge';

export default {
	title: 'Cosmoz Badge',
	component: 'cosmoz-badge',
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['pill', 'color', 'modern'],
			description: 'Badge type variant',
			table: { defaultValue: { summary: 'pill' } },
		},
		color: {
			control: 'select',
			options: ['gray', 'brand', 'error', 'warning', 'success'],
			description: 'Badge color scheme',
			table: { defaultValue: { summary: 'gray' } },
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Badge size',
			table: { defaultValue: { summary: 'md' } },
		},
		dot: {
			control: 'boolean',
			description: 'Show dot indicator',
			table: { defaultValue: { summary: 'false' } },
		},
		label: {
			control: 'text',
			description: 'Badge label text',
		},
	},
};

const customPrefixIcon = (props: any) => {
	return arrowUpIcon({
		...props,
		width: props.width || '12',
		height: props.height || '12',
	});
};

const customSuffixIcon = (props: any) => {
	return arrowRightIcon({
		...props,
		width: props.width || '12',
		height: props.height || '12',
	});
};

// Helper to render badge with args
const renderBadge = (args: any) => html`
	<cosmoz-badge
		type=${args.type || 'pill'}
		color=${args.color || 'gray'}
		size=${args.size || 'md'}
		?dot=${args.dot}
	>
		${args.label || 'Badge'}
	</cosmoz-badge>
`;

// Default story with controls
export const Default = {
	args: {
		type: 'pill',
		color: 'gray',
		size: 'md',
		label: 'Label',
		dot: false,
	},
	render: renderBadge,
};

// ========== BADGE (basic) ==========

export const Colors = {
	render: () => html`
		<div class="story-row">
			<cosmoz-badge>Default</cosmoz-badge>
			<cosmoz-badge color="brand">Brand</cosmoz-badge>
			<cosmoz-badge color="error">Error</cosmoz-badge>
			<cosmoz-badge color="warning">Warning</cosmoz-badge>
			<cosmoz-badge color="success">Success</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'All available color variants for the badge.',
			},
		},
	},
};

export const Types = {
	render: () => html`
		<div class="story-row">
			<cosmoz-badge>Gray</cosmoz-badge>
			<cosmoz-badge type="color" color="brand">Color</cosmoz-badge>
			<cosmoz-badge type="modern">Modern</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'The three badge types: pill (rounded), badge (square corners), and modern (shadow + neutral colors).',
			},
		},
	},
};

export const Sizes = {
	render: () => html`
		<div class="story-row">
			<cosmoz-badge size="sm" color="brand">Small</cosmoz-badge>
			<cosmoz-badge size="md" color="brand">Medium</cosmoz-badge>
			<cosmoz-badge size="lg" color="brand">Large</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: { story: 'Badge sizes: sm, md, and lg.' },
		},
	},
};

// ========== BADGE WITH DOT ==========

export const WithDot = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Pill</h1>
				<div class="story-row">
					<cosmoz-badge dot>Gray</cosmoz-badge>
					<cosmoz-badge dot color="brand">Brand</cosmoz-badge>
					<cosmoz-badge dot color="error">Error</cosmoz-badge>
					<cosmoz-badge dot color="warning">Warning</cosmoz-badge>
					<cosmoz-badge dot color="success">Success</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge dot type="color">Gray</cosmoz-badge>
					<cosmoz-badge dot type="color" color="brand">Brand</cosmoz-badge>
					<cosmoz-badge dot type="color" color="error">Error</cosmoz-badge>
					<cosmoz-badge dot type="color" color="warning">Warning</cosmoz-badge>
					<cosmoz-badge dot type="color" color="success">Success</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge dot type="modern">Gray</cosmoz-badge>
					<cosmoz-badge dot type="modern" color="brand">Brand</cosmoz-badge>
					<cosmoz-badge dot type="modern" color="error">Error</cosmoz-badge>
					<cosmoz-badge dot type="modern" color="warning">Warning</cosmoz-badge>
					<cosmoz-badge dot type="modern" color="success">Success</cosmoz-badge>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Badge with a colored dot indicator. The dot color follows the badge color scheme.',
			},
		},
	},
};

// ========== BADGE WITH ICON ==========

export const WithPrefixIcon = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Pill</h1>
				<div class="story-row">
					<cosmoz-badge>
						${customPrefixIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge color="brand">
						${customPrefixIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge color="error">
						${customPrefixIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge color="warning">
						${customPrefixIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge color="success">
						${customPrefixIcon({ slot: 'prefix' })} Success
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge type="color">
						${customPrefixIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge type="color" color="brand">
						${customPrefixIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge type="color" color="error">
						${customPrefixIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge type="color" color="warning">
						${customPrefixIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge type="color" color="success">
						${customPrefixIcon({ slot: 'prefix' })} Success
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge type="modern">
						${customPrefixIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="brand">
						${customPrefixIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="error">
						${customPrefixIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="warning">
						${customPrefixIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="success">
						${customPrefixIcon({ slot: 'prefix' })} Success
					</cosmoz-badge>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Badge with a leading (prefix) icon. Place an SVG with slot="prefix".',
			},
		},
	},
};

export const WithSuffixIcon = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Pill</h1>
				<div class="story-row">
					<cosmoz-badge>
						Default ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="brand">
						Brand ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="error">
						Error ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="warning">
						Warning ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="success">
						Success ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge type="color">
						Default ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="brand">
						Brand ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="error">
						Error ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="warning">
						Warning ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="success">
						Success ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge type="modern">
						Default ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="brand">
						Brand ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="error">
						Error ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="warning">
						Warning ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="success">
						Success ${customSuffixIcon({ slot: 'suffix' })}
					</cosmoz-badge>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Badge with a trailing (suffix) icon. Place an SVG with slot="suffix".',
			},
		},
	},
};

// ========== COMPLETE MATRIX ==========

export const AllColorsByType = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Pill</h1>
				<div class="story-row">
					<cosmoz-badge>Default</cosmoz-badge>
					<cosmoz-badge color="brand">Brand</cosmoz-badge>
					<cosmoz-badge color="error">Error</cosmoz-badge>
					<cosmoz-badge color="warning">Warning</cosmoz-badge>
					<cosmoz-badge color="success">Success</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge type="color">Default</cosmoz-badge>
					<cosmoz-badge type="color" color="brand">Brand</cosmoz-badge>
					<cosmoz-badge type="color" color="error">Error</cosmoz-badge>
					<cosmoz-badge type="color" color="warning">Warning</cosmoz-badge>
					<cosmoz-badge type="color" color="success">Success</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge type="modern">Default</cosmoz-badge>
					<cosmoz-badge type="modern" color="brand">Brand</cosmoz-badge>
					<cosmoz-badge type="modern" color="error">Error</cosmoz-badge>
					<cosmoz-badge type="modern" color="warning">Warning</cosmoz-badge>
					<cosmoz-badge type="modern" color="success">Success</cosmoz-badge>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Complete matrix of all colors across all badge types.',
			},
		},
	},
};
