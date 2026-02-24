import { alertTriangleIcon, arrowUpIcon } from '@neovici/cosmoz-icons/untitled';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-badge';

type BadgeArgs = {
	variant?: 'default' | 'error' | 'warning' | 'success' | 'modern';
	size?: 'sm' | 'md' | 'lg';
	shape?: 'rounded' | 'square';
	label?: string;
};

export default {
	title: 'Cosmoz Badge',
	component: 'cosmoz-badge',
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'error', 'warning', 'success', 'modern'],
			description: 'The visual style variant of the badge',
			table: {
				defaultValue: { summary: 'default' },
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'The size of the badge',
			table: {
				defaultValue: { summary: 'md' },
			},
		},
		shape: {
			control: 'select',
			options: ['rounded', 'square'],
			description: 'The shape of the badge',
			table: {
				defaultValue: { summary: 'rounded' },
			},
		},
		label: {
			control: 'text',
			description: 'Badge label text',
		},
	},
} satisfies Meta<BadgeArgs>;

type Story = StoryObj<BadgeArgs>;

// Helper to render badge with args
const renderBadge = (args: BadgeArgs) => html`
	<cosmoz-badge variant=${args.variant || 'default'} size=${args.size || 'md'}>
		${args.label || 'Badge'}
	</cosmoz-badge>
`;

// Default story with controls
export const Default: Story = {
	args: {
		variant: 'default',
		size: 'lg',
		shape: 'rounded',
		label: 'Default',
	},
	render: renderBadge,
};

// All Variants
export const Variants: Story = {
	render: () => html`
		<div class="story-row">
			<cosmoz-badge variant="default">Default</cosmoz-badge>
			<cosmoz-badge variant="error">Error</cosmoz-badge>
			<cosmoz-badge variant="warning">Warning</cosmoz-badge>
			<cosmoz-badge variant="success">Success</cosmoz-badge>
			<cosmoz-badge variant="modern">Modern</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'The five visual style variants available for the badge.',
			},
		},
	},
};

export const Shapes: Story = {
	render: () => html`
		<div class="story-row">
			<cosmoz-badge shape="rounded">Rounded</cosmoz-badge>
			<cosmoz-badge shape="square">Square</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'The two shape variants available for the badge.',
			},
		},
	},
};

export const WithIcons: Story = {
	args: {
		size: 'lg',
	},
	render: (args: BadgeArgs) => html`
		<div class="story-row">
			<cosmoz-badge variant="warning" size=${args.size}>
				${alertTriangleIcon({ width: '16', height: '16', slot: 'prefix' })}
				Warning
			</cosmoz-badge>
			<cosmoz-badge variant="error" size=${args.size}>
				Label ${arrowUpIcon({ width: '16', height: '16', slot: 'suffix' })}
			</cosmoz-badge>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'A badge with prefix and suffix icons.',
			},
		},
	},
};
