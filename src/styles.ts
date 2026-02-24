import { css } from '@pionjs/pion';

/**
 * Badge styles using cosmoz-tokens design system
 * Based on Untitled UI badge component specifications
 */
export const styles = css`
	:host {
		display: inline-flex;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .badge {
		height: calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding-inline: calc(var(--cz-spacing) * 2);
	}

	:host([size='md']) .badge {
		height: calc(var(--cz-spacing) * 5.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 2.5);
	}

	:host([size='lg']) .badge {
		height: calc(var(--cz-spacing) * 6.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	/* ========================================
		* STYLE VARIANTS
		* ======================================== */
	:host([variant='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-border-error);
	}

	:host([variant='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-border-warning);
	}

	:host([variant='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-border-success);
	}

	:host([variant='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
		box-shadow: var(--cz-shadow-xs);
	}

	/* ========================================
	 * SHAPE VARIANTS
	 * ======================================== */
	:host([shape='square']) .badge {
		border-radius: var(--cz-radius-sm);
	}
	/* ========================================
	 * BADGE BASE STYLES
	 * ======================================== */

	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--cz-spacing);
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		width: 100%;
		white-space: nowrap;
		border-width: 1px;
		border-style: solid;
		/* Default */
		height: calc(var(--cz-spacing) * 5.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 2.5);
		background-color: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);

		/* Shape - rounded */
		border-radius: var(--cz-radius-full);
	}
`;
