import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-badge';

export default { title: 'Tests/Compact badge' } satisfies Meta;

export const Counters: StoryObj = {
	render: () => html`
		<div style="--cz-text-2xs: .6875rem; --cz-text-2xs-line-height: 1.5">
			${['pill', 'color', 'modern'].map(
				(type) => html`
					<cosmoz-badge size="xs" type=${type}>1 409 166</cosmoz-badge>
					<cosmoz-badge size="xs" type=${type} dot>1 409 166</cosmoz-badge>
				`,
			)}
			<cosmoz-badge size="sm">1 409 166</cosmoz-badge>
		</div>
	`,
	play: async ({ canvasElement }) => {
		await waitFor(() => {
			const badges = canvasElement.querySelectorAll('cosmoz-badge[size="xs"]');
			expect(badges.length).toBe(6);
			for (const host of badges) {
				const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge')!;
				const content =
					host.shadowRoot!.querySelector<HTMLElement>('.content')!;
				const style = getComputedStyle(badge);
				expect(badge.getBoundingClientRect().height).toBe(20);
				expect(style.fontSize).toBe('11px');
				expect(style.fontWeight).toBe('400');
				expect(content.scrollWidth).toBeLessThanOrEqual(content.clientWidth);
			}
			const small = canvasElement.querySelector('cosmoz-badge[size="sm"]')!;
			const badge = small.shadowRoot!.querySelector<HTMLElement>('.badge')!;
			expect(getComputedStyle(badge).fontSize).toBe('12px');
			expect(badge.getBoundingClientRect().height).toBe(24);
		});
	},
};
