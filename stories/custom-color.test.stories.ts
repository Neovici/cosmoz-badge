import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-badge';

export default { title: 'Tests/Custom color badge' } satisfies Meta;

const badgeOf = (host: Element) =>
	host.shadowRoot!.querySelector<HTMLElement>('.badge')!;

export const CustomColor: StoryObj = {
	render: () => html`
		<cosmoz-badge id="named" color="brand">Brand</cosmoz-badge>
		<cosmoz-badge id="plain">Plain</cosmoz-badge>
		<cosmoz-badge id="red" color="#ff0000" dot>Red</cosmoz-badge>
		<cosmoz-badge id="blue" color="rgb(0, 0, 255)">Blue</cosmoz-badge>
	`,
	play: async ({ canvasElement }) => {
		const $ = (id: string) => canvasElement.querySelector(`#${id}`)!;
		await waitFor(() => {
			const red = getComputedStyle(badgeOf($('red')));
			const blue = getComputedStyle(badgeOf($('blue')));
			const plain = getComputedStyle(badgeOf($('plain')));
			expect(red.backgroundColor).not.toBe(plain.backgroundColor);
			expect(red.backgroundColor).not.toBe(blue.backgroundColor);
			expect(red.color).not.toBe(plain.color);
			const dot = $('red').shadowRoot!.querySelector<HTMLElement>('.dot')!;
			expect(getComputedStyle(dot).backgroundColor).toBe('rgb(255, 0, 0)');
			expect(badgeOf($('named')).classList.contains('custom')).toBe(false);
		});
	},
};

export const SwitchToNamed: StoryObj = {
	render: () => html`<cosmoz-badge color="#ff0000">Badge</cosmoz-badge>`,
	play: async ({ canvasElement }) => {
		const host = canvasElement.querySelector('cosmoz-badge')!;
		await waitFor(() =>
			expect(badgeOf(host).style.getPropertyValue('--color')).toBe('#ff0000'),
		);
		host.setAttribute('color', 'brand');
		await waitFor(() => {
			expect(badgeOf(host).classList.contains('custom')).toBe(false);
			expect(badgeOf(host).style.getPropertyValue('--color')).toBe('');
		});
	},
};
