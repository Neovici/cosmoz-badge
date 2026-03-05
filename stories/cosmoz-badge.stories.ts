import {
	arrowRightIcon,
	arrowUpIcon,
	plusIcon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from 'lit-html';
import '../src/cosmoz-badge';

export default {
	title: 'Cosmoz Badge',
	component: 'cosmoz-badge',
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['pill', 'color', 'modern', 'icon'],
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
						${arrowUpIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge color="brand">
						${arrowUpIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge color="error">
						${arrowUpIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge color="warning">
						${arrowUpIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge color="success">
						${arrowUpIcon({ slot: 'prefix' })} Success
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge type="color">
						${arrowUpIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge type="color" color="brand">
						${arrowUpIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge type="color" color="error">
						${arrowUpIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge type="color" color="warning">
						${arrowUpIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge type="color" color="success">
						${arrowUpIcon({ slot: 'prefix' })} Success
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge type="modern">
						${arrowUpIcon({ slot: 'prefix' })} Default
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="brand">
						${arrowUpIcon({ slot: 'prefix' })} Brand
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="error">
						${arrowUpIcon({ slot: 'prefix' })} Error
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="warning">
						${arrowUpIcon({ slot: 'prefix' })} Warning
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="success">
						${arrowUpIcon({ slot: 'prefix' })} Success
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
						Default ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="brand">
						Brand ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="error">
						Error ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="warning">
						Warning ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge color="success">
						Success ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Color</h1>
				<div class="story-row">
					<cosmoz-badge type="color">
						Default ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="brand">
						Brand ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="error">
						Error ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="warning">
						Warning ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="color" color="success">
						Success ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Modern</h1>
				<div class="story-row">
					<cosmoz-badge type="modern">
						Default ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="brand">
						Brand ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="error">
						Error ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="warning">
						Warning ${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-badge>
					<cosmoz-badge type="modern" color="success">
						Success ${arrowRightIcon({ slot: 'suffix' })}
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

// ========== ICON-ONLY BADGE ==========

export const IconOnly = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Sizes</h1>
				<div class="story-row">
					<cosmoz-badge type="icon" size="sm"> ${plusIcon()} </cosmoz-badge>
					<cosmoz-badge type="icon"> ${plusIcon()} </cosmoz-badge>
					<cosmoz-badge type="icon" size="lg"> ${plusIcon()} </cosmoz-badge>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Colors</h1>
				<div class="story-row">
					<cosmoz-badge type="icon"> ${plusIcon()} </cosmoz-badge>
					<cosmoz-badge type="icon" color="brand"> ${plusIcon()} </cosmoz-badge>
					<cosmoz-badge type="icon" color="error"> ${plusIcon()} </cosmoz-badge>
					<cosmoz-badge type="icon" color="warning">
						${plusIcon()}
					</cosmoz-badge>
					<cosmoz-badge type="icon" color="success">
						${plusIcon()}
					</cosmoz-badge>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Icon-only badge with no text. Circular shape with equal padding. Pass an icon in the default slot.',
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
